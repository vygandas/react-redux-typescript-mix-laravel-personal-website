<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\Post;

class ApiController extends Controller {

    public function __construct() {
        $this->middleware('auth');
    }

    public function getPosts() {
        $posts = [];
        return response()->json([
            'payload' => $posts
        ]);
    }
}
