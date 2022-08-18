
     // Obtener fecha actual
     let fecha = new Date();
     // Agregar 3 días
     fecha.setDate(fecha.getDate() + 2);
     // Obtener cadena en formato yyyy-mm-dd, eliminando zona y hora
     let fechaMin = fecha.toISOString().split('T')[0];
     // Asignar valor mínimo
     document.querySelector('#fechaReserva').min = fechaMin; 

var overlay = document.getElementById("overlay")
var pop = document.getElementById("popup")
var close = document.getElementById("btn-cerrar-popup"); 
var boton = document.getElementById("boton"); 

// parte de reservaciones 
/* js de como funciona el overlay */
boton.addEventListener("click" ,function(){
overlay.classList.add("active") ;

})

close.addEventListener("click", function(){
overlay.classList.remove("active")

})

function reservacion(){

  var nombres = document.getElementById("name").value;
  var cedul = document.getElementById("cedula").value;
 // var h = document.getElementById("hora").value;
   
  var fecha = document.getElementById("fechaReserva").value

  
var max = 3333;
var min=1111;

 var code = Math.floor(Math.random() * (max - min) ) + min;
    

    if (nombres == "" && cedul==""&fecha=="") 
    {  
     
            console.log("error");
            alert("LO SIENTO, SU RESERVACION NO SE HA COMPLETADO"); 
     
    }
      else {
        
            document.getElementById("textito").innerHTML = "FELICIDADES <br>"  + " SU RESERVACION SE A REALIZADO CON EXITO <br> PARA EL DIA: "+ fecha+"  <br> A NOMBRE DE :"+nombres+"<br> CODIGO DE RESERVACION: "+code +"<br> CEDULA:" + cedul + "<br> LOS DATOS PROPORCIONADOS DEBEN SER ENTREGADOS EN LA RECEPCION "  ;
            console.log("correcto");
           // alert("FELICIDADES " + nombres + " EL LUGAR DE SU RESERVACION TIENE SU CEDULA: " + cedula + " LA CUAL USTED DEBE ENTREGAR EL DIA QUE RESERVO " );

    }
    
      }