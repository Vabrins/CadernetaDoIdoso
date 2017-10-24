<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Caderneta do Idoso</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,500'>
        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #FFF;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
        <!-- General styles -->
        <link rel="stylesheet" href="{{ asset('/css/global.css') }}">
    </head>
    <body id="welcome">
        <div class="flex-center position-ref full-height">
            <div class="top-right links">
                    <a href="https://github.com/Vabrins/CadernetaDoIdoso">GitHub</a>
            </div>

            <div class="content">
                <div class="title m-b-md content-title">
                    Caderneta do Idoso
                </div>
                @if (Route::has('login'))
                    <div class="links">
                        @auth
                            <a href="{{ url('/index') }}">Acesso a Caderneta Digital</a>
                        @else
                            <a class="links-item" href="{{ route('login') }}">Entrar</a>
                            <a class="links-item" href="{{ route('register') }}">Registre-se</a>
                        @endauth
                    </div>
                @endif
            </div>
        </div>
    </body>
</html>
