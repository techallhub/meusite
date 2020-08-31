<?php

if (isset($_POST['email'] && !empty($_POST['email']) ) {
	$pNome =  addslashes($_POST['firstName']);
	$uNome =  addslashes($_POST['lastName']);
	$email = addslashes($_POST['toEmail']);
	$subject = addslashes($_POST['subject']);
	$mensagem = addslashes($_POST['bMessage']);



$toEmail = "techall@hotmail.com.br";
$subject = "FormSite".$subject;
$bMessage = "Nome: ".$pNome. "\r\n".
			"Nome: ".$uNome. "\r\n".
			"E-mail: ".$email. "\r\n".
			"Motivo: ".$subject. "\r\n".
			"Mensagem: ".$mensagem;
$header = "From:techall@hotmail.com.br"."\r\n"
			."Reply-To:".$email."\r\n"
			."X-mailer:PHP/".phpversion();

if (mail($toEmail,$subject,$bMessage,$header)) {
	echo ("E-mail enviado com sucesso!");
}
else {
	echo("O e-mail não pode ser enviado.");
}


}


/*
// Define variables and set to empty values 
$firstNameErr = $lastNameErr = $toEmailErr = $subjectErr = "";
$fistName = $lastName = $toEmail = $subject = $bMessage = "";

if ($_SERVER["REQUEST METHOD"] == "POST") {
	
	if (empty($_POST["fistName"])) {
	$firstNameErr = '"Primeiro Nome" é um campo requerido"';
	}
	else {
		$fistName = test_input ($_POST['fistName'])

		//Check if fistName only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z]*$/",$fistName)) {
			$nameErr = "Somente letras e espaços são permitidos";
		}
	}

if (empty($_POST["lastName"])) {
	$lastNameErr = '"Último Nome" é um campo requerido"';
	}
	else {
		$lastName = test_input ($_POST['lastName'])

		//Check if lastName only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z]*$/",$lastName)) {
			$lastNameErr = "Somente letras e espaços são permitidos";
		}
	}

if (empty($_POST["toEmail"])) {
	$toEmailErr = '"E-mail" é um campo requerido"';
	}
	else {
		$toEmail = test_input ($_POST['toEmail'])

		//Check if E-mail address is well-formed
		if (!filter_var($toEmail, FILTER_VALIDATE_EMAIL)) {
			$toEmailErr = "Formato de e-mail inválido";
		}
	}

if (empty($_POST["subject"])) {
	$subject = '"Motivo" é um campo requerido"';
	}
	else {
		$subjectErr = test_input ($_POST['subject'])

		//Check if fistName only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z]*$/",$subject)) {
			$subjectErr = "Somente letras e espaços são permitidos";
		}
	}

if (empty($_POST["bMessage"])) {
	$bMessage = "";
	}
	else {
		$bMessage = test_input ($_POST['bMessage'])

	}


}

function test_input($data){
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}
*/

?>