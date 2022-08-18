function agregarUsuario() {
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var genero = document.querySelector('input[name=genero]:checked').value;
    var telefono = document.getElementById("telefono").value;
    var fechaNacimiento = document.querySelector('input[name="fecha"]').value;
    var correo = document.getElementById("correo").value;
    var direccion = document.getElementById("direccion").value;
    var contraseña = document.getElementById("contraseña").value;


    var boton = document.getElementById("boton");
    var checks = document.querySelectorAll('.valores');

    boton.addEventListener('click', function () {
        checks.forEach((elemento) => {
            if (elemento.checked == true) {
                
            }
        })
    });
 

    swal({
        title: "CONFIRMAR DATOS REGISTRO",
        text: (cedula + " " + nombre + " " + apellido + " " + genero + " " + telefono + " " + fechaNacimiento + " " + correo + " " + direccion + " "  + contraseña + " "),
        icon: "warning",
        buttons: true,
        dangerMode: false,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("¡DATOS VERIFICADOS! :)", {
                    icon: "success",
                });
            } else {
                swal("VUELVA A INGRESAR LOS DATOS POR FAVOR");
            }
        });

    if (cedula == "") {
        swal("La cedula es obligatoria", {
            icon: "error",
        });
    }
    if (nombre == "") {
        swal("El nombre es obligatorio", {
            icon: "error",
        });
    }
    if (apellido == "") {
        swal("El apellido es obligatorio", {
            icon: "error",
        });
    }

    if (genero == "") {
        alert("El genero es obligatorio");
        document.querySelector('input[name=genero]:checked').focus();
    }
    if (telefono == "") {
        swal("El numero de telefono es obligatorio", {
            icon: "error",
        });
    }
    if (fechaNacimiento == "") {
        
        swal("La Fecha de Nacimiento es Obligatorio");
        document.querySelector('input[name="fecha"]').focus();
    }
    if (correo == "") {
        swal("El correo es obligatorio", {
            icon: "error",
        });
    }
    if (direccion == "") {
        swal("La direccion es obligatoria", {
            icon: "error",
        });
    }
    if (contraseña == "") {
        swal("La contraseña es obligatoria", {
            icon: "error",
        });
    }

}

