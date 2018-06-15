<?php

Auth::routes();

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::group(['prefix' => 'api'], function () {
    Route::get('get/posts', 'ApiController@getPosts');
});

Route::get('{any}', 'HomeController@index')->where('any', '.*')->name('home');