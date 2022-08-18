function registroSesion() {
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("password").value;
    if (usuario == "UsuarioVIP" && clave == "EC593") {
        window.location.assign("dashboard.html")


    } else {
        alert("Las credenciales son incorrecras")
    }
    console.log(usuario + " " + clave)
}
