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
			<div id="contact-textbox">
				<p class="contact-text1">Questions. Concerns. Orders. Anything.</p>
				<p class="contact-text2">We'd love to hear from you.</p>
			</div>
			<div id="form-wrapper">
				<!-- HTML Form for contacting OOS -->
				<form method="post" name="myemailform" action="php/form-to-email.php">
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
					<button type="submit" class="btn" name="submit">Submit</button>
				</form>	
			</div>
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