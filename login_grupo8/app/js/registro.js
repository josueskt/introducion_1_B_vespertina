function crearUsuario() {
    var Cedula = document.getElementById("cedula").value;
    if (Cedula == null) {
        alert("Número de cedula obligatorio");
        document.write("cedula").focus();
    }

    var Nombre = document.getElementById("nombre").value;
    if (Nombre == null) {
        alert("Nombre obligatorio");
        document.write("nombre").focus();
    }

    var Apellido = document.getElementById("apellido").value;
    if (Apellido == null) {
        alert("Apellido obligatorio");
        document.write("apellido").focus();
    }

    var Contraseña = document.getElementById("password").value;
    if (Contraseña == null) {
        alert("Contraseña obligatorio");
        document.write("password").focus();
    }

    var Correo = document.getElementById("correo").value;
    if (Correo == null) {
        alert("Correo electronico obligatorio");
        document.write("correo").focus();
    }

    var Sexo = document.querySelector('input[name="sexo"]:checked').value;
    if (Sexo == null) {
        alert("Sexo obligatorio");
        document.write("sexo").focus();
    }

    var Direccion = document.getElementById("direccion").value;
    if (Direccion == null) {
        alert("Dirección domicilio obligatorio");
        document.write("direccion").focus();
    }

    var fechaNacimiento = document.querySelector('input[name="fechaN"]').value;
    if (fechaNacimiento == null) {
        alert("Fecha de nacimiento obligatorio");
        document.write("fechaN").focus();
    }

    var Telefono = document.getElementById("telefono").value;
    if (Telefono == null) {
        alert("Telefono obligatorio");
        document.write("telefono").focus();
    }

    var Idioma = document.querySelector('input[name="idioma"]:checked').value;
    if (Idioma == null) {
        alert("Idioma/as obligatorio");
        document.write("idioma").focus();
    }
    
}