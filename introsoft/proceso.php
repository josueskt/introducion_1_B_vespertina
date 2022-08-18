<?php
	
	if (!empty($_POST['email']) && !empty($_POST['pwd'] )){
		//proceso 1 -- ejecute la validación del email y la clave
		$usuario = $_POST['email'];
		$clave = $_POST['pwd'];
		//if (isset($_POST[$usuario])){
			//preceso 1-- imprima estoy dentro del sistema
			//echo "Hola mundo, estoy dentro del sistema";
			//if(!$usuario=="" || !$clave==""){
				//proceso 1 -- Validar la clave y el usuario
				// conexion con BD
				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "introsoft";

				//conexión
				$conn = new mysqli($servername, $username, $password, $dbname);

				//check a la conexión
				if($conn->connect_error){
					die("conexion con la base de datos fallida" . $conn->connect_error);
				}
				
				// consulta a la base de datos
				$sql = "SELECT * FROM usuarios";
				$result = $conn->query($sql);

				if($result->num_rows > 0){
					//preceso 1
					//echo "si hay registros";
					while($row = $result->fetch_assoc()){
						if($usuario == $row["usuario"] && $clave == $row["clave"]){
							//ingrese al sistema
							echo "ESTAS DENTRO DEL SISTEMA";
							$_SESSION['nombre'] = $row['nombre'];
							echo '<script>location.href="index.html"</script>';

						}else{
							echo "USUARIO O CLAVE INCORRECTOS, POR FAVOR INGRESE LOS DATOS CORRECTOS.";

						}

					}
				}else{
					echo "no hay registros en la tabla";
				}



			//}else{
				//proceso 2 -- enviar un mensaje los input estan vacios
				//echo "El usuario o clave estan vacias";
			//}

		//}else{
			//proceso 2 -- imprima clave o usuario incorrectos
			//echo "Clave o usuario son incorrectos, vuelva a intentar";

		//}

	//}else{
		//proceso 2
		//echo "los input están vacíos";
	}

?>