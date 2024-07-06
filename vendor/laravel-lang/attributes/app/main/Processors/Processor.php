<?php

namespace LaravelLang\Development\Processors;

use DragonCode\Support\Concerns\Makeable;
use DragonCode\Support\Facades\Filesystem\Directory;
use DragonCode\Support\Facades\Filesystem\File;
use DragonCode\Support\Facades\Helpers\Arr;
use DragonCode\Support\Tools\Stub;
use LaravelLang\Development\Application;
use LaravelLang\Development\Concerns\Contains;
use LaravelLang\Development\Contracts\Filesystem;
use LaravelLang\Development\Contracts\Processable;
use LaravelLang\Development\Contracts\Stringable;
use LaravelLang\Development\Facades\Arr as ArrSupport;
use LaravelLang\Development\Services\Filesystem\Base;
use LaravelLang\Development\Services\Filesystem\Json as JsonFilesystem;
use LaravelLang\Development\Services\Filesystem\Markdown as MarkdownFilesystem;
use LaravelLang\Development\Services\Filesystem\Php as PhpFilesystem;

abstract class Processor implements Processable
{
    use Contains;
    use Makeable;

    protected Application $app;

    protected array $source = [];

    protected string $target_path;

    /** @var \LaravelLang\Development\Contracts\Filesystem[]|array */
    protected array $filesystems = [];

    public function application(Application $app): Processable
    {
        $this->app = $app;

        return $this;
    }

    protected function merge(array $source, array $target, string $filename): array
    {
        $target = $this->filter($target, $source);

        $this->sort($source);
        $this->sort($target);

        return ArrSupport::merge($source, $target);
    }

    protected function process(string $target_path, string $filename, ?string $locale = null): void
    {
        $source = $this->source($filename);
        $target = $this->load($target_path);

        $content = $this->merge($source, $target, $filename);

        $this->store($target_path, $content, $filename);
    }

    protected function source(string $filename): array
    {
        if ($this->source[$filename] ?? false) {
            return $this->source[$filename];
        }

        return $this->source[$filename] = $this->isJson($filename) ? $this->sourceJson() : $this->loadSource($filename);
    }

    protected function loadSource(string $filename): array
    {
        return $this->load($this->getSourcePath($filename));
    }

    protected function sourceJson(): array
    {
        $path = $this->getSourcePath();

        $files = File::names($path, fn ($filename) => $this->isJson($filename), true);

        $array = [];

        foreach ($files as $file) {
            $items = $this->loadSource($file);

            $array = Arr::addUnique($array, $items);
        }

        return Arr::renameKeys($array, static fn ($key, $value) => $value);
    }

    protected function getFallbackValue(array $source, array $target, string $key)
    {
        return Arr::get($target, $key) ?: Arr::get($source, $key, []);
    }

    protected function getTargetPath(?string $path = null): string
    {
        if ($path = $this->app->cleanPath($path)) {
            $path = '/' . $path;
        }

        return $this->app->path($this->target_path . $path);
    }

    protected function getSourcePath(?string $filename = null): string
    {
        return $this->app->sourcePath($filename);
    }

    protected function filter(array $first, array $second): array
    {
        $keys = array_keys($second);

        return Arr::only($first, $keys);
    }

    protected function sort(array &$array, bool $key = true): void
    {
        $array = $key
            ? Arr::ksort($array)
            : Arr::sort($array);
    }

    protected function load(string $path): array
    {
        return $this->getFilesystem($path)->load($path);
    }

    protected function locales(): array
    {
        return Directory::names($this->getTargetPath());
    }

    protected function resolveFilename(string $filename, string $locale): string
    {
        return $this->isMainJson($filename) ? $locale . '.json' : $filename;
    }

    protected function getFilesystem(string $filename): Filesystem
    {
        $class = $this->getFilesystemClass($filename);

        if ($this->filesystems[$class] ?? false) {
            return $this->filesystems[$class];
        }

        return $this->filesystems[$class] = $this->loadFilesystem($class);
    }

    protected function getFilesystemClass(string $path): string
    {
        return match (true) {
            $this->isJson($path)     => JsonFilesystem::class,

            $this->isMarkdown($path) => MarkdownFilesystem::class,

            default                  => PhpFilesystem::class,
        };
    }

    protected function loadFilesystem(Filesystem|Base|string $filesystem): Filesystem
    {
        return $filesystem::make()->application($this->app);
    }

    protected function store(string $path, array|string|Stringable $content, ?string $source_filename = null, bool $is_simple = false): void
    {
        $stub = $this->getStubPath($source_filename);

        $this->getFilesystem($path)->store($path, $content, $is_simple, $stub);
    }

    protected function getStubPath(?string $filename): ?string
    {
        return empty($filename) ? Stub::PHP_ARRAY : $filename;
    }
}
