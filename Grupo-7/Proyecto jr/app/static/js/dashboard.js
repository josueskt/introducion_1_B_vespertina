
//calificar pagina
const todaslasestrellas = document.querySelectorAll('.estrellas');
todaslasestrellas.forEach((estrellas, i) => {
    estrellas.onclick = function () {
        let lv_estrellas = i + 1;
        console.log(i)

        todaslasestrellas.forEach((estrellas, j) => {
            if (lv_estrellas >= j + 1) {
                estrellas.innerHTML = '&#9733';
            } else {
                estrellas.innerHTML = '&#9734';
            }
        })
    }
})
function aletacalificacion() {
    alert("gracias por calificarnos")

}









//selector del registro de reservaciones
var selecField=document.getElementById("selecField");
var selectText=document.getElementById("selectText");
var opntion=document.getElementsByClassName("opntion ");
var list=document.getElementById("list");
var arrowIcon=document.getElementById("arrowIcon");

selecField.onclick = function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");

}

for(option of opntion){
    option.onclick=function(){
        selectText.innerHTML= this.textContent;  
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}



//registor de reservaiones

function alertareservaciones() {
    var nombre = document.getElementById("nombre").value;
    var cedula = document.getElementById("cedula").value;
    var paisciudad = document.getElementById("paises").value;
    var hoteldeseado = document.getElementsByClassName("list").value;
    var estadias = document.getElementById("diass").value
    var fecha = document.querySelector('input[name=fechainicioI]').value;
    if (nombre == "") {
        alert("NOMBRES y APELLIDOS,Este dato es obligatorio");
        document.getElementById("nombre").focus();
    }
    if (cedula == "") {
        alert("CEDULA,Este dato es obligatorio");
        document.getElementById("cedula").focus();
    }
    if (paisciudad == "") {
        alert("PAIS o CIUDAD,Este dato es obligatorio");
        document.getElementById("paisciudad").focus();
    }
    if (hoteldeseado == "") {
        alert("HOTELES,Este dato es obligatorio");
        document.getElementById("hoteldeseado").focus();
    }
    if (estadias == "") {
        alert("ESTADIA,Este dato es obligatorio");
        document.querySelector('input[name=undia]:checked').focus();
    }
    if (fecha == "") {
        alert("FECHA,Este dato es obligatorio");
        document.querySelector('input[name=fechainicioI]').focus()
    }
    if (nombre, cedula, paisciudad, hoteldeseado, estadias, fecha == "") {
        alert("DATOS NO VALIDOS")

    }

    console.table(nombre + cedula + paisciudad + hoteldeseado + estadias + fecha)
}



//reservacion de dias

function reservarempresas(){
 var valortour= document.getElementById("valortour").value;
 var empresas= document.getElementById("empresas").value;

console.log(valortour + empresas)
if(valortour==""){
    alert("SIN VALOR")
}
if(empresas==""){
    alert ("SIN TOUR")
}
}
//mostrar datos formulario de reservaciones


