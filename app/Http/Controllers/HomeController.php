<?php

namespace App\Http\Controllers;

use App\Helpers\AppDataHelper;
use Illuminate\Http\Request;

class HomeController extends Controller {

    public function __construct() {
        AppDataHelper::getInstance()
            ->addMany(setting('api'));
    }

    public function index() {
        return view('home');
    }
}
