//buscador 

function autocompletado() {
  document.getElementById("demo").innerHTML = '';

  var preguntas =[
    "PARQUE FUNDEPORTE",
    "PARQUE GUAPULO",
    "PARQUE LA CAROLINA",
    "PARQUE LAS CUADRAS",
    "PARQUE METROPOLITANO"
  ];

   var pal = document.getElementById("buscar-pal").value;
  
   if(preguntas.includes(pal.toUpperCase())==true){
    if(pal.toUpperCase()=="PARQUE FUNDEPORTE"){
      window.location.href = '../Outstanding%20parks%20of%20Ecuadorimgtest/Outstanding%20parks%20of%20Ecuador/interfaz/interfaz_1.html';
    }

    if(pal.toUpperCase()=="PARQUE GUAPULO"){
      window.location.href = '../Outstanding%20parks%20of%20Ecuadorimgtest/Outstanding%20parks%20of%20Ecuador/interfaz/interfaz_2.html';
    }

    if(pal.toUpperCase()=="PARQUE LA CAROLINA"){
      window.location.href = '../Outstanding%20parks%20of%20Ecuadorimgtest/Outstanding%20parks%20of%20Ecuador/interfaz/interfaz_3.html'
    }

    if(pal.toUpperCase()=="PARQUE LAS CUADRAS"){
      window.location.href ="../Outstanding%20parks%20of%20Ecuadorimgtest/Outstanding%20parks%20of%20Ecuador/interfaz/interfaz_4.html";
    }

    if(pal.toUpperCase()=="PARQUE METROPOLITANO"){
      window.location.href ="../Outstanding%20parks%20of%20Ecuadorimgtest/Outstanding%20parks%20of%20Ecuador/interfaz/interfaz_5.html";
    }

   }

  
}