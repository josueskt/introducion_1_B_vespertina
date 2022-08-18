<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MATERIAS BASICAS "COLEGIO"</title>
    <link rel="stylesheet" href="estilos/login.css">
    <link href="https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&family=Pacifico&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        
</head>

<body>

    <header>
        <nav id="menu">
            <br>
            <ul>
                <li class="icono2">
                    <a class="link" href="contact.html">Contactos</a>
                </li>
                <li class="icono2">
                    <a class="link" href="about.html">About</a>
                </li>
                <li class="icono2">
                    <a class="link" href="services.html">Services</a>
                </li>
                <li class="icono2">
                    <a class="link" href="#">Log In</a>
                </li>
                <li class="icono2">
                    <a class="link" href="portfolio.html">Nosotros</a>
                </li>
                <li class="icono2">
                    <a class="link" href="#">HOME</a>
                </li>
            </ul>
            </div>
            <div class="fotologo">
                <img src="img/imagenes/logo.trian.PNG" alt="" width="100" height="65">
            </div>

        </nav>
    </header>
    <br>
    <div class="titu2">
        <h1> <strong>Log In</strong> </h1>
    </div>
    
    <div id="formula1">
        <!--largo de la pagina-->
        <div class="main">
            <div id="login">
                    <form action="proceso.php" method="post"  class="was-validated">
        
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Usuario:</label>
                            <input type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico" name="email" required>
                        </div>

                        <div class="mb-3">
                            <label for="pwd" class="form-label">Password:</label>
                            <input type="password" class="form-control" id="pwd" placeholder="Ingrese su clave" name="pwd" maxlength="6" size="6" required>
                        </div>
                        
                        <div>
                            <br><button type="submit" class="btn btn-primary">Iniciar Sesion</button>
                        </div>
                        <div id="target">
                            <p>Aún no te registras <a href="app/static/registro.html">Registrate</a></p>
                        </div>
                    </form>
                
            </div>
        </div>
    </div>
    
    <footer>
        <P>Derechos reservados de Esteban@yavirac.edu.ec</P> 
        
    </footer>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</html>