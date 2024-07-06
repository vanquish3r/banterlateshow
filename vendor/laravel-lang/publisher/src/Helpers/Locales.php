<?php

/*
 * This file is part of the "laravel-lang/publisher" project.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Andrey Helldar <helldar@ai-rus.com>
 *
 * @copyright 2021 Andrey Helldar
 *
 * @license MIT
 *
 * @see https://github.com/Laravel-Lang/publisher
 */

declare(strict_types=1);

namespace LaravelLang\Publisher\Helpers;

use DragonCode\Support\Facades\Filesystem\Directory;
use DragonCode\Support\Facades\Filesystem\File;
use DragonCode\Support\Facades\Helpers\Arr;
use DragonCode\Support\Facades\Instances\Reflection;
use Illuminate\Support\Facades\Config as Illuminate;
use LaravelLang\Publisher\Concerns\Has;
use LaravelLang\Publisher\Concerns\Paths;
use LaravelLang\Publisher\Constants\Locales as LocalesList;
use LaravelLang\Publisher\Exceptions\SourceLocaleDoesntExistsException;
use LaravelLang\Publisher\Facades\Helpers\Config as ConfigHelper;

class Locales
{
    use Has;
    use Paths;

    public function available(): array
    {
        return Arr::of(
            Reflection::getConstants(LocalesList::class)
        )
            ->unique()
            ->sort()
            ->values()
            ->toArray();
    }

    public function installed(): array
    {
        return Arr::of($this->findJson())
            ->addUnique($this->findPhp())
            ->filter(fn (string $locale) => $this->isAvailable($locale))
            ->unique()
            ->sort()
            ->values()
            ->toArray();
    }

    public function protects(): array
    {
        return Arr::of([
            $this->getDefault(),
            $this->getFallback(),
        ])->unique()->toArray();
    }

    public function isAvailable(string $locale): bool
    {
        return $this->in($locale, $this->available());
    }

    public function isProtected(string $locale): bool
    {
        return $this->in($locale, $this->protects());
    }

    public function isInstalled(string $locale): bool
    {
        return $this->in($locale, $this->installed());
    }

    public function getDefault(): string
    {
        return Illuminate::get('app.locale') ?: $this->getFallback();
    }

    public function getFallback(): string
    {
        return Illuminate::get('app.fallback_locale', LocalesList::ENGLISH);
    }

    public function validate(string $locale): void
    {
        if (! $this->isAvailable($locale)) {
            throw new SourceLocaleDoesntExistsException($locale);
        }
    }

    protected function in(string $locale, array $locales): bool
    {
        return in_array($locale, $locales, true);
    }

    protected function findJson(): array
    {
        $files = File::names($this->resources(), null, true);

        return Arr::of($files)
            ->filter(fn (string $filename) => $this->hasJson($filename))
            ->map(fn (string $filename)    => $this->filename($filename))
            ->values()
            ->toArray();
    }

    protected function findPhp(): array
    {
        return Directory::names($this->resources());
    }

    protected function resources(): string
    {
        return ConfigHelper::resources();
    }
}
