<?php
namespace App\Helpers;

class AppDataHelper {

    protected static $instance = null;

    protected function __construct() {
        // Prevent using constructor
    }

    protected function __clone() {
        // Prevent cloning
    }

    public static function getInstance() : AppDataHelper {
        if (!isset(static::$instance)) {
            static::$instance = new static;
        }
        return static::$instance;
    }

    private $appData = [];

    public function add(string $key, object $data) : AppDataHelper {
        $this->appData[$key] = $data;
        return $this;
    }

    public function addMany(array $data) : AppDataHelper {
        $this->appData = array_merge($this->appData, $data);
        return $this;
    }

    public function getSerialised() : string {
        return json_encode($this->appData);
    }

}