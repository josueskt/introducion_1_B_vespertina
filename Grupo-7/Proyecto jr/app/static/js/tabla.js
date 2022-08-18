//mostrar datos
const formularioo = document.getElementById("reservacion")

formularioo.addEventListener("submit",function(event){
  event.preventDefault();

  let regFormularioData = new FormData(formularioo )

  let regTableRef =  document.getElementById("tablaimprimirdatos");
  let newRegRowRef = regTableRef.insertRow();

  let newTypeCellRef =  newRegRowRef.insertCell(0);

  newTypeCellRef.textContent = regFormularioData.get("name");

   newTypeCellRef =  newRegRowRef.insertCell(1);

  newTypeCellRef.textContent = regFormularioData.get("dni");

   newTypeCellRef =  newRegRowRef.insertCell(2);

  newTypeCellRef.textContent = regFormularioData.get("pais");

  newTypeCellRef =  newRegRowRef.insertCell(3);

  newTypeCellRef.textContent = regFormularioData.get("imag_hoteles");

  newTypeCellRef =  newRegRowRef.insertCell(4);

  newTypeCellRef.textContent = regFormularioData.get("dia");

  newTypeCellRef =  newRegRowRef.insertCell(5);

  newTypeCellRef.textContent = regFormularioData.get("fechainicioI");

})



//tabla 2

const tabla2 = document.getElementById("paquetesturisticos")

tabla2.addEventListener("submit",function(event){
  event.preventDefault();

  let regFormularioData = new FormData(tabla2 )

  let regTableRef =  document.getElementById("tablaimprimirdatos2");
  let newRegRowRef = regTableRef.insertRow();

  let newTypeCellRef =  newRegRowRef.insertCell(0);

  newTypeCellRef.textContent = regFormularioData.get("preciosvip");

   newTypeCellRef =  newRegRowRef.insertCell(1);

  newTypeCellRef.textContent = regFormularioData.get("empresa");

})





