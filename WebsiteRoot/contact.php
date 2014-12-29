<?php 

if($_SERVER["REQUEST_METHOD"] == "POST") {
	
	$firstname = trim($_POST['firstname']);
	$lastname = trim($_POST['lastname']);
	$emailaddress = trim($_POST['emailaddress']);
	$phonenumber = $_POST['phonenumber'];
	$servicetype = $_POST['servicetype'];
	$details = ($_POST['details']);

	if(empty($firstname)||empty($lastname)||empty($emailaddress)){
		echo "Name and Email are mandatory!";
		exit;
	}

	foreach( $_POST as $value){
		if (stripos($value, 'Content-Type:') !== FALSE){
			echo "there was a problem with the information you entered.";
			exit;
		}
	}

	if($_POST["address"] != "") {
		echo "Your form submission has an error.";
		exit;
	}

	//phpmailer include and security check
	require_once("include/phpmailer/class.phpmailer.php");
	$mail = new PHPMailer();

	if(!$mail->ValidateAddress($emailaddress)){
		echo "You must specify a valid email address";
		exit;
	}

	$email_from = "Mike@ourownstyle.com";

	$email_subject = $servicetype . " - OOS Web Contact Form";
	$email_body = "you have recieved a new message from the user " . $firstname . " " . $lastname . "." . "\n";
	$email_body .= "email address: " . $emailaddress . "\n";
	$email_body .= "phone number: " . $phonenumber . "\n";
	$email_body .= "Here is the message:\n " . $details;

	// $to = "Mike@ourownstyle.com";
	// $headers = "From: $email_from \r\n";

	// //send the email
	// mail($to, $email_subject, $email_body, $headers);

	$mail->SetFrom($emailaddress, $firstname . " " . $lastname);
	$address = "Mike@ourownstyle.com";
	$mail->AddAddress($address, "OOS-Website");
	$mail->Subject = "OOS Contact Form Submission | " . $firstname . " " . $lastname;
	$mail->MsgHTML($email_body);

	if(!$mail->Send()) {
		echo "there was a problem sending the email: " . $mail->ErrorInfo;
		exit;
	}

	//done, redirect to thank you page
	//echo "your messae has been sent"; old way of doing it just plain text
	
	header("Location: contact.php?status=thanks");
	exit;
}

?>

<DOCTYPE! html>
<html>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
		<title>OOS Products</title>	
		<link rel"stylesheet" href="stylesheet/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/header.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/general-layout.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/contact.css">
		<meta name="viewport" content="initial-scale=1">
	</head>
	<body>
	
	
		<?php include "include/header.php"; ?>


		<div id="headercoloroverlay">
		</div>
		<div class="backgroundfixed" style="background-image: url('images/For the Contact Page.jpg');">
			<div id="productheader">
			<p id="prodheadtext">CONNECT</p>
		</div>
		</div>
		<div class="main-content">

			<?php if(isset($_GET["status"]) AND $_GET["status"] == "thanks"){ ?>

			<div class="thank-you-text-wrapper">
					<div class="thank-you-text">
					Thank You!<br>Your form has been submitted.<br>We will get back to you as soon as we can.<br>
					</div>
			</div>

			<?php } else { ?>

			<div id="contact-textbox">
				<p class="contact-text1">Questions. Concerns. Orders. Anything.</p>
				<p class="contact-text2">We'd love to hear from you.</p>
			</div>
			<div id="form-wrapper">
				<!-- HTML Form for contacting OOS -->
				<form method="post" name="myemailform" action="contact.php">
					<table>
						<p class="form-title">OOS Contact Form</p>
						<input type="text" name="firstname" placeholder="First Name"></input>
						<input type="text" name="lastname" placeholder="Last Name"></input>
						<input type="text" name="emailaddress" placeholder="Email Address"></input>
						<input type="text" name="phonenumber" placeholder="Phone Number"></input>
						<select class="form-control" name="servicetype">
						  <option value="Silk Screening">Silk Screening</option>
						  <option value="Heat Transfers">Heat Transfers</option>
						  <option value="Stickers/Decals">Stickers/Decals</option>
						  <option value="Others">Other</option>
						</select>
						<textarea type="text" name="details" rows="3" placeholder="Message/Details"></textarea><br><br>
						<tr style="display: none">
						<th>
							<label for="address">Address</label>
						</td>
							<input type="text" name="address" id="address">
							<p>Humans: please leave this field blank</p>
						</td>
						</tr>
					</table>
					<button type="submit" class="btn" name="submit">Submit</button>
				</form>	
			</div>

			<?php } ?>

			<ul id="contactimages">
				<li><img class="contactimg1" src="images/contactimage1.jpg"></img></li>
				<li><img class="contactimg2" src="images/contactimage2.jpg"></img></li>
				<li><img class="contactimg3" src="images/contactimage3.jpg"></img></li>
				<li><img class="contactimg4" src="images/contactimage4.jpg"></img></li>
			</ul>
		</div>
		<script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/loadpagecontact.js"></script>
		<script src="js/mobilemenu.js"></script>
	</body>

	<?php include "include/footer.php"; ?>
	
</html>