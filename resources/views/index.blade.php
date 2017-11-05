<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Caderneta Digital do Idoso">
    <meta name="author" content="Vabrins - Vitor Teofilo, Bruno Rodrigues e André da Silva">
    <title>Caderneta Digital do Idoso</title>
    <!-- Bootstrap core CSS-->
    <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }}">
    <!-- Custom fonts for this template-->
    <link rel="stylesheet" href="{{ asset('/css/font-awesome/css/font-awesome.min.css') }}">
    <!-- Custom styles for this template-->
    <link rel="stylesheet" href="{{ asset('/css/sb-admin.css') }}">
    <!-- Google fonts -->
    <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Open+Sans'>
    <!-- General styles -->
    <link rel="stylesheet" href="{{ asset('/css/global.css') }}">
  </head>
  <body class="fixed-nav sticky-footer bg-dark sidenav-toggled" id="page-top">

    <div class="content-wrapper">
      <div id="app" class="container-fluid"></div>
      <footer class="sticky-footer">
        <div class="container">
          <div class="text-center">
            <small>Vabrins - Caderneta digital do idoso 2017 | Software Livre - MIT | <a style="color: black;" href="https://github.com/Vabrins/CadernetaDoIdoso" target="blank"><i class="fa fa-github" aria-hidden="true"></i></a></small>
          </div>
        </div>
      </footer>
      <!-- Scroll to Top Button-->
      <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"></i>
      </a>
      <!-- Logout Modal-->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Saindo...</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">Você tem certeza que quer sair? <br/> Dados não salvos serão perdidos.</div>
            <div class="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
              <a class="btn btn-primary" href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
              Sair
            </a>
            </div>
          </div>
          <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            {{ csrf_field() }}
          </form>
        </div>
      </div>
      <script>
        var scriptSrc = '{{ URL::asset('/js/sb-admin.js') }}';
      </script>
      <!-- React components modules -->
      <script async src="{{ asset('/js/bundle.js') }}"></script>
      <!-- Bootstrap core JavaScript-->
      <script src="{{ asset('/js/jquery.min.js') }}"></script>
      <script src="{{ asset('/js/popper/popper.min.js') }}"></script>
      <script src="{{ asset('/js/bootstrap.min.js') }}"></script>
      <!-- Core plugin JavaScript-->
      <script async src="{{ asset('/js/jquery.easing.min.js') }}"></script>
    </div>
  </body>
</html>

