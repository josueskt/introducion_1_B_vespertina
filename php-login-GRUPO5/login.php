<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&family=Square+Peg&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/login.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="formulario">
        <form action="proceso.php" class="was-validated">
            <h1>Login</h1>
            <div class="contenedor">     
             <div class="input-contenedor">
             <i class="fas fa-envelope icon"></i>
             <input type="text" placeholder="Correo Electronico" required>
             
             </div>
             
             <div class="input-contenedor">
            <i class="fas fa-key icon"></i>
             <input type="password" placeholder="Contraseña" maxlength="4" size="4" required>
             
             </div>
             <input type="submit" value="Login" class="button">
             <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
             <p>¿No tienes una cuenta? <a class="link" href="/html/register.html">Registrate </a></p>
        </form>
    </div>
</body>
</html>