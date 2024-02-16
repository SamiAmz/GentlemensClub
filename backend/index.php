<?php
require 'router.php';

$router = new Router();

session_start();

// Define routes
$router->add('GET', '/', function() {
    echo "root";
});


$router->add('POST', '/login', function() {
    exit;
});


// Dispatch the request
$requestMethod = $_SERVER['REQUEST_METHOD'];

$requestUri = $_SERVER['REQUEST_URI'];
$subdirectory = '/GentlemensClub/backend';
$requestUri = str_replace($subdirectory, '', $requestUri);



$router->dispatch($requestMethod, $requestUri);

?>