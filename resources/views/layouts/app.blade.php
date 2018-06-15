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

</head>
<body>
    <div id="root"></div>

    <script>var appData = {!! App\Helpers\AppDataHelper::getInstance()->getSerialised() !!};</script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
