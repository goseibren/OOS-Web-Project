<?php
if(!isset($_POST['submit'])){
	//this page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$emailaddress = $_POST['emailaddress'];
$phonenumber = $_POST['phonenumber'];
$servicetype = $_POST['servicetype'];
$details = $_POST['details'];

if(empty($firstname)||empty($lastname)||empty($emailaddress)){
	echo "Name and Email are mandatory!";
}

$email_from = "byamaguchi92@gmail.com";
$email_subject = $servicetype + " - OOS Web Contact Form";
$email_body = "you have recieved a new message from the user" . $firstname . $lastname . "\n" . "email address: " . $emailaddress . "\n" . "Here is the message:\n " . $details;

$to = "byamaguchi92@gmail.com";
$headers = "From: $email_from \r\n";

//send the email
mail($to, $email_subject, $email_body, $headers);
//done, redirect to thank you page
echo "your message has been sent";
?>