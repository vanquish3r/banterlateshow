<?php

use LaravelLang\Development\Processors\Keys;

require __DIR__ . '/bootstrap/autoload.php';

/** @var \LaravelLang\Development\Application $app */
$app = require_once __DIR__ . '/bootstrap/app.php';

$app->processor(Keys::make());
