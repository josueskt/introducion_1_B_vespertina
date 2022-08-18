function enviarDatos(){
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;

    var selccion = document.getElementById("opcion-1").value;

    var colegio = document.getElementById("opcion-2").value;
    var conoci = document.querySelector("input[name=cono]:checked").value;



    var respuesta1 = confirm(cedula + " " + nombre + " " + apellido + " " +
    selccion +" " + conoci + " " +  "Estas seguro de guardar tus datos");




    console.log(cedula + " " + nombre + " " + apellido + " " + edad + " " + 
    telefono + "" + selccion + " " + colegio + "" + conoci + "");

    

    if(respuesta1 == true){
            document.getElementById("cedula").value="";
            document.getElementById("nombres").value="";
            document.getElementById("apellidos").value="";
            document.getElementById("edad").value="";
            document.getElementById("telefono").value="";
            document.getElementById("opcion-1").value="";
            document.getElementById("opcion-2").value="";
            document.getElementById("cono").value="";
            document.getElementById("cedula").focus();
            alert("Tus datos se han guardato :)");
            return true;
            }
            else{
                       
            return false;
            } 
        }

    

function cancelarDatos(){

    window.location="file:///C:/Users/Esteban/Desktop/PROYECTO%20INTEGRADOR/web/index.html";
}

