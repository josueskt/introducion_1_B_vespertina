function agregarUsuario() {

    var Cedula = document.getElementById("password").value;

    var Nombres = document.getElementById("Usuario").value;


    if (Nombres == "esteban" && Cedula == "1234" || Nombres == "leonardo" && Cedula == "4321" ) {

        window.location.href = ("file:///C:/Users/Esteban/Desktop/PROYECTO%20INTEGRADOR/especialidad/especi.html")
    }else{
        if (Nombres==""){
        alert("El nombres es obligatorio digitar");
        document.getElementById("Usuario").focus();
    }else{
        if (Cedula==""){
            alert("La contraseña es obligatorio digitar");
            document.getElementById("password").focus();
    }else{
        document.getElementById("Usuario").value="";
        document.getElementById("password").value="";
        document.getElementById("Usuario").focus();
        alert("Cuenta incorrecta")
    }
    } 
    }

}