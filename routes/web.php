<?php

Auth::routes();

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::group(['prefix' => 'api'], function () {
    Route::get('get/posts', 'ApiController@getPosts');
});

Route::get('{all?}', 'HomeController@index')->name('home');