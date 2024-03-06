<?php
require 'router.php';

$router = new Router();

session_start();

// Define routes
$router->add('GET', '/', function() {
    echo "homePage";
});



$router->add('POST', '/login', function() {
    exit;
});


// Dispatch the request
$requestMethod = $_SERVER['REQUEST_METHOD'];

$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$subdirectory = '/GentlemensClub';
$requestUri = str_replace($subdirectory, '', $requestUri);


$router->dispatch($requestMethod, $requestUri);

?>