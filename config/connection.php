<?php
	$HOST 	= 'localhost';
	$USER 	=  'root';	
	$PW 	= 'asms#v2%fe';
	$DB 	= 'sc_website';


	$conn = mysqli_connect($HOST, $USER, $PW,$DB);
	mysqli_query($conn, 'SET CHARACTER SET utf8');
	mysqli_query($conn, "SET SESSION collation_connection ='utf8_general_ci' ");

	// Check connection
	if (!$conn) {
	  die("Server not found: " . mysqli_connect_error());
	}
?>