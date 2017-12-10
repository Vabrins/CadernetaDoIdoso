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
            <header>
                <div class="top-right links">
                    @if (Route::has('login'))
                        @auth
                            <a href="{{ url('/index') }}">Acesso a Caderneta Digital</a>
                        @else
                            <a href="{{ route('login') }}">Entrar</a>
                            <a href="{{ route('register') }}">Registre-se</a>
                        @endauth
                    @endif
                </div>
                <h3 id="title">Caderneta Digital do Idoso</h3>
            </header>
            <div class="content">               
                @if (Route::has('login'))
                    @auth
                        <div class="links">
                            <a class="links-item" href="{{ url('/index') }}">Voltar para caderneta</a>
                        </div>
                    @else
                        <div class="links">
                            <input type="text" id="cpf" maxlength="11" placeholder="CPF" onkeypress="onlyNumbers(event)" onchange="checkCPF(this.value)" >
                            <br/>
                            <a class="links-item" id="cpf-bottom" style="font-size: 1.4rem" href="">Consultar minha caderneta de saúde</a>
                        </div>
                    @endauth
                @endif  
            </div>
        </div>
    </body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="{{ asset('/js/global.js') }}"></script>
<script>
    var CPF = document.getElementById("cpf");
    
    document.getElementById("cpf-bottom").addEventListener("click", function(evt){
        evt.preventDefault();
        (CPF.value == "") ? alert('Digite seu CPF!') : existCPF(CPF.value);
        // isLogged();       
    });
</script>