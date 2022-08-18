


/*const formularioo = document.getElementById("formulario2")

formularioo.addEventListener("submit",function(evento){
  evento.preventDefault();

  let regFormularioData =new FormData(formularioo )

  let regTableRef =  document.getElementById("datatable");
  let newRegRowRef = regTableRef.insertRow();


  let newTypeCellRef =  newRegRowRef.insertCell(0);
  newTypeCellRef.textContent = regFormularioData.get("nombre");

   newTypeCellRef =  newRegRowRef.insertCell(1);
  newTypeCellRef.textContent = regFormularioData.get("apellidos");

   newTypeCellRef =  newRegRowRef.insertCell(2);
  newTypeCellRef.textContent = regFormularioData.get("cedula");


})
*/
//regFormularioData.get("nombre")
//regFormularioData.get("apellidos")
//regFormularioData.get("cedula")




function agregarUsuario (){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var cedula = document.getElementById("cedula").value;
    var sexo = document.querySelector('input[name=sexo]:checked'.value);
    var fecha = document.querySelector(`input[name=fecha]`).value;
    var celular = document.getElementById("celular").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
     
    var boton = document.getElementById("boton");
    var checks = document.querySelectorAll('.valores');
    

    boton.addEventListener("click",function() {
        checks.forEach((elemento) => {
            if (elemento.checked == true) {
             
        console.log(elemento.value);
            }
        })
    });

      
  if(nombre==""){
        alert("NOMBRES,Este dato es obligatorio");  
        document.getElementById("nombre").focus();
      }
      if(apellidos==""){
        alert("APELLIODOS,Este dato es obligatorio");  
        document.getElementById("apellido").focus();
      }  
      if(cedula==""){
        alert("CEDULA,Este dato es obligatorio");  
        document.getElementById("cedula").focus();
      }
      if(sexo==" "){
        document.querySelector(`input[name=sexo]checked`).focus();
      }
      if(fecha==""){
        alert("FECHA,Este dato es obligatorio"); 
        document.getElementById("fecha").focus();
    }
    if(celular==""){
        alert("NUMERO CELULAR,Este dato es obligatorio"); 
        document.getElementById("celular").focus();

    }
      if(correo==""){
        alert("CORREO,Este dato es obligatorio"); 
        document.getElementById("correo").focus();   
    }
   // if(idioma==" "){
   // document.querySelector(`input[id=checks]`).focus();
    //  }
      if(contraseña==""){
        alert("contraseña,Este dato es obligatorio");  
        document.getElementById("contrasena").focus();
        
      }


    console.table(nombre + " " + apellidos + " " + cedula+" "+ sexo+" " + fecha+" "+celular+""+correo+""+checks+""+contraseña);
   alert(" !!FELICIDADES Resistro exitoso¡¡ Su usuaario es (UsuarioVIP) y contraseña es (EC593)")
  }
