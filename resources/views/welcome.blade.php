<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <!--CSS-->
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
        <!--Fonteawesome-->
        <link rel="stylesheet" href="http://localhost:8080/fontawesome/css/all.css">
        <script>
            (function(){
                window.Laravel = {
                    csrfToken: '{{csrf_token()}}'
                }
            })();
        </script>
    </head>
    <body class="antialiased">
        <div id="app">
            <main-app />
        </div>
        <script src="{{mix('js/app.js')}}"></script>
    </body>



    <script src="//unpkg.com/vue"></script>
    <script src="//unpkg.com/view-design/dist/iview.min.js"></script>
    <script src="//unpkg.com/view-design/dist/locale/en-US.js"></script>

    <script>
    iview.lang('en-US');
    </script>
</html>
