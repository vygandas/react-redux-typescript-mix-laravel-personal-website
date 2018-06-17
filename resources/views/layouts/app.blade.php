<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ setting('site.title') }}</title>

    <meta name="description" content="{{ setting('site.description') }}"/>

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    @include('partial.tracking.ga')

    <style>
        #preloader {
            position: fixed;
            top: 0; bottom: 0; left: 0; right: 0;
            z-index: 99999;
            background: #eeeeee url('/loader.gif');
            background-position: center;
            background-repeat: no-repeat;
        }
    </style>
    <link rel="preload" href="/loader.gif" as="image"/>
</head>
<body>
    <div id="preloader"></div>

    <div id="root"></div>

    <script>var appData = {!! App\Helpers\AppDataHelper::getInstance()->getSerialised() !!};</script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
