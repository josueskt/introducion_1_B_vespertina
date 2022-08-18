<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TESTING</title>
  <link rel="stylesheet" href="estilos.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

  <header>
    <div class="row">
      <div class="col col-md-3">
        <img class="logo" src="../web/static/img/logo.png" alt="" width="" height="110">
      </div>
      <div class="bg-info">
        <h1>LOGIN</h1>
      </div>
  </header>

  <body class="body">
    <div>
    <div class="container p-5 my-5 bg-dark text-white">
          <form action="proceso.php" method="post" class="was-validated">
            <div class="mb-3 mt-3">
              <label for="email" class="text-primary" >Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico" name="email" required>
            </div>
            <div class="mb-3">
              <label for="pwd" class="text-primary">Contraseña:</label>
              <input type="password" class="form-control" id="pwd" placeholder="Ingrese su clave" name="pwd" maxlength="6" size="6" required>
            </div>
            <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              Recordarme
            </div>
            <button type="submit" class="btn btn-primary">Entrar</button>
          </form>
    </div>
    <div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </html>