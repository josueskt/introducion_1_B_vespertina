<?php
    if (!empty($_POST['email'] && !empty($_POST['pws']))) {
        //proceso 1 -- ejecute la validacion del email y la clave
        $usuario = $_POST['email'];
        $clave = $_POST['clve'];
        if ($usuario == "DorianGrey@hotmail.com" && $clave == "1234") {
            //proceso 1 -- Imprima estoy dentro del sistema
            echo "Hola mundo, estoy dentro del sistema";
        }else{
            //proceso 2 -- Imprica clave o usuario incorrectos
            echo "Clave o usuario son incorrectos, vuelva a intentar";
        }

    }else {
       //proceso 2     
    }
?>