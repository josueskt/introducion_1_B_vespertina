function confirmarDatos() {

    var nombrecomprador = document.getElementById("ncomprador").value;
    var apellidocomprador = document.getElementById("acomprador").value;
    var direccionenvio = document.getElementById("direccion").value;
    var numerocontacto = document.getElementById("ncontacto").value;
    var pais = document.getElementById("paisEntrega").value;


    swal({
        title: "CONFIRMAR DATOS DE COMPRA",
        text: (nombrecomprador + " " + apellidocomprador + " tu pedido te llegará a la direccion de: " + direccionenvio + " al pais de: " + pais + " y el numero de referencia es: " + numerocontacto),
        icon: "warning",
        buttons: true,
        dangerMode: false,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("¡DATOS CONFIRMADOS! Los cuadros te llegaran dentro de una semana, GRACIAS POR TU COMPRA :)", {
                    icon: "success",
                });
            } else {
                swal("DATOS DE LA COMPRA ANULADOS :(", {
                    icon: "error",
                });
            }
        });

}
