<?php

class Router {
    private $handlers = [];

    public function add($method, $route, $handler) {
        $this->handlers[$method][$route] = $handler;
    }

    public function dispatch($method, $uri) {
        if (isset($this->handlers[$method][$uri])) {
            return call_user_func($this->handlers[$method][$uri]);
        }
        http_response_code(404);
        echo "Not Found";
    }
}

?>
