function agregarUsuario(){   
    var Cedula = document.getElementById("cedula").value;
    var Nombres = document.getElementById("nombres").value;
    var Apellidos = document.getElementById("apellidos").value;
    var Sexo = document.querySelector("input[name=sexo]:checked").value;
    var Telefono = document.getElementById("telefono").value;
    var Fecha = document.getElementById("fecha").value;
    var Correo = document.getElementById("correo").value;
    var Direccion = document.getElementById("direccion").value;
    var Password = document.getElementById("contraseña").value;



   alert("Tus datos se guardaron")

console.log(Cedula + " " + Nombres + " " + Apellidos + " " + Sexo + " " + Telefono + " " + Fecha + " " 
    + Correo + " " + Direccion + " " + Password + " ");

}

