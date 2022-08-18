
function iniciarSesion() {
    var usuario, clave;
   

    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("password").value;

    if (usuario == "Jennifer" && clave == "1234567") {
      window.location.assign("dashboard.html")

    } else {
        swal("Las credenciales son incorectas, por favor vuélvelas a ingresar correctamente.", {
            icon: "error",
        });
    }
  }

