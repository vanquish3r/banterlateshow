<?php

namespace LaravelLang\Development\Services\Filesystem;

use DragonCode\Support\Facades\Filesystem\File;
use DragonCode\Support\Facades\Helpers\Arr;
use DragonCode\Support\Tools\Stub;
use LaravelLang\Development\Contracts\Stringable;

class Json extends Base
{
    public function load(string $path): array
    {
        $items = File::load($path);

        return $this->correctValues($items);
    }

    public function store(string $path, array|string|Stringable $content, bool $is_simple = false, string $stub = Stub::PHP_ARRAY): void
    {
        if ($is_simple) {
            $content = array_values($content);
        }

        Arr::storeAsJson($path, $content, false, JSON_UNESCAPED_UNICODE ^ JSON_PRETTY_PRINT);
    }
}
