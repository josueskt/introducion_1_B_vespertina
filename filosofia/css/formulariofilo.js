function verificarRespuestas(){
    var total = 5;
    var puntos = 0;

    var myForm = document.forms["testleng"];
    var respuestas = ["b", "b", "b", "c", "a"]

    for(var i=1; i<= total; i++){
        if(myForm["p" + i].value === null || myForm["p" + i].value === ""){
            alert("Por favor responde la pregunta" + i);
            return false;
        }else{
            if(myForm["p" + i].value === respuestas[i - 1]){
                puntos++;

            }
        }
    }
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>Obtuviste <span>' + puntos + ' puntos </span></h3>'

    return false;
}