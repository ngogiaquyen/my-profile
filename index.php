<?php


$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
if ($path !== "/" && file_exists(__DIR__ . "/build" . $path)) {
    return false;
}
require __DIR__ . "/build/index.html";
