<?php	
	if (!empty($_POST['email']) && !empty($_POST['pwd'] )){		
		$usuario = $_POST['email'];
		$clave = $_POST['pwd'];
		
				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "introsof";

				$conn = new mysqli($servername, $username, $password, $dbname);

				
				if($conn->connect_error){
					die("conexion con la base de datos fallida" . $conn->connect_error);
				}				
				$sql = "SELECT * FROM usuarios";
				$result = $conn->query($sql);

				if($result->num_rows > 0){
					
					while($row = $result->fetch_assoc()){
						if($usuario == $row["usuario"] && $clave == $row["pass"]){
							
							echo "Leyendo de la DB... estoy dentro del sistema";
							$_SESSION['nombre'] = $row['nombre'];
                            echo '<script>alert("Bienvenido");</script>';
							echo '<script>location.href="dashboard/cita.html"</script>';

						}else{
							echo '<script>alert("Credenciales Incorectas");</script>';
                            echo '<script>location.href="login.html"</script>';
						}
					}
				}else{
					echo "no hay registros en la tabla";
				}			
	}

?>