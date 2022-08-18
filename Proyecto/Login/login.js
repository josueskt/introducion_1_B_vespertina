document.getElementById ("btn__iniciar-sesión").addEventListener ("click", iniciarSesion);
document.getElementById ("btn__registrarse").addEventListener ("click", register);

/*Variables*/ 
var contenedor_login_registro = document.querySelector(".contenedor__login-registro")
var formulario_login = document.querySelector(".formulario__login")
var formulario_registro = document.querySelector(".formulario__registro")
var caja_trasera_login = document.querySelector(".caja__trasera-login")
var caja_trasera_registro = document.querySelector(".caja__trasera-registro")



function iniciarSesion(){
    formulario_registro.style.display = "none";
    contenedor_login_registro.style.left="10px";
    formulario_login.style.display ="block";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";

}

function register(){
    formulario_registro.style.display = "block";
    contenedor_login_registro.style.left="410px";
    formulario_login.style.display ="none";
    caja_trasera_registro.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";

}
function agregarUsuario() {
    var datos = [];
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;
    console.log(nombre);
    console.log(apellido);
    console.log(correo);
    console.log(clave);
    alert("tus datos se han registrado correctamente, puedes iniciar sesion")
    datos.push(correo);
    datos.push(clave);
    console.log(datos)
    return correo, clave;
}
