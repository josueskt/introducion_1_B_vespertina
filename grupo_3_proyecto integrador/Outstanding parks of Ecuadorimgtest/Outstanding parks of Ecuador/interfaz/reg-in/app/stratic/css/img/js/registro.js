
//login
function login() {
  alert("Ingresando")
  
  var usuariu = document.getElementById("correu").value; 
  
  var cotra = document.getElementById("contra").value; 
 
 
 
  if (usuariu == "Admin" && cotra == "Admin") {
   
    window.location.href = "../../../../Outstanding parks of Ecuador.html";
  
    
  }

  else
  {
      alert("datos incorrectos")
  }
  


}
//registro
function guardar(){
   //elementos de registro
  var _nom = document.getElementById("name").value;
  var _ape = document.getElementById("apellido").value;
  var _ced = document.getElementById("cedula").value;
  var _con = document.getElementById("contraseña").value;
  var _cor = document.getElementById("correo").value;
  var _dir = document.getElementById("direccion").value;
  var _tel = document.getElementById("telefono").value;
  var _nac = document.getElementById("nacimiento").value;
  var Sexo= document.querySelector('input[name="sexo"]:checked').value;



  var fila="<td>"+_nom+"</td><td>"+_ape +"</td><td>"+_ced +"</td><td>"+_con +"</td><td>"+_cor + "</td><td>"+_dir +"</td><td>"+_tel +"</td><td>"+_nac +"</td><td>"+Sexo+"</td>";

  var btn = document.createElement("TR");
   btn.innerHTML=fila;
  document.getElementById("tablita").appendChild(btn);
}

