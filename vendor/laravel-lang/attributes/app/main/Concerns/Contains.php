<?php

namespace LaravelLang\Development\Concerns;

use DragonCode\Support\Facades\Filesystem\Directory;
use DragonCode\Support\Facades\Helpers\Str;
use LaravelLang\Development\Constants\Locales;

trait Contains
{
    protected function isMainJson(string $filename): bool
    {
        if ($this->isEnglishJson($filename)) {
            return true;
        }

        $locale = Str::before($filename, '.');

        $path = $this->app->localePath($locale);

        return $this->isJson($filename) && Directory::exists($path);
    }

    protected function isEnglishJson(string $filename): bool
    {
        return $this->isJson($filename) && str_starts_with($filename, Locales::ENGLISH);
    }

    protected function isJson(string $filename): bool
    {
        return str_ends_with($filename, 'json');
    }

    protected function isMarkdown(string $filename): bool
    {
        return str_ends_with($filename, 'md');
    }
}
