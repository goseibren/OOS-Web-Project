<DOCTYPE! html>
<html>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
		<title>OOS Products</title>	
		<link rel="stylesheet" type="text/css" href="stylesheet/header.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/general-layout.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/custom.css">
		<meta name="viewport" content="initial-scale=1">
	</head>
	<body>
		
		<?php include "include/header.php"; ?>

		<div id="headercoloroverlay">
		</div>
		<div class="backgroundfixed" style="background-image: url('images/customheaderpicture.jpg');">
			<!-- <img src="images/customheaderpicture.jpg"></img> -->
			<div id="productheader">
				<p id="prodheadtext">SERVICES</p>
			</div>
		</div>
		<div class="main-content">
			<ul id="customimages">
				<div style="background-image: url('images/custom1.jpg');">
					<img src="images/silkscreenink.svg" class="customlogo" id="silkscreen"></img>
					<img src="images/circlering.svg" class="customlogoring" id="circlering"></img>
					<!-- <img src="images/custom1.jpg" id="custom1"></img> -->
					<p id="silkscreentext">Screen Printing</p>
				</div>
				<div style="background-image: url('images/custom2.jpg');">
					<img src="images/jersey.svg" class="customlogo" id="heatpress"></img>
					<img src="images/circlering.svg" class="customlogoring" id="circlering"></img>
					<!-- <img src="images/custom2.jpg" id="custom2"></img> -->
					<p id="heatpresstext">Heat Transfer</p>
				</div>
				<div style="background-image: url('images/custom3.jpg');">
					<img src="images/stickers.svg" class="customlogo" id="stickers"></img>
					<img src="images/circlering.svg" class="customlogoring" id="circlering"></img>
					<!-- <img src="images/custom3.jpg" id="custom3"></img> -->
					<p id="stickerstext">Stickers/Decals</p>
				</div>
			</ul>
			<form method="post" name="myemailform" action="php/form-to-email.php">
					<input type="text" name="firstname" placeholder="First Name"></input><br>
					<input type="text" name="lastname" placeholder="Last Name"></input><br>
					<input type="text" name="emailaddress" placeholder="Email Address"></input><br>
					<input type="text" name="phonenumber" placeholder="Phone Number"></input><br>
					<br>
					<select class="form-control" name="servicetype">
					  <option value="Silk Screening">Silk Screening</option>
					  <option value="Heat Transfers">Heat Transfers</option>
					  <option value="Stickers/Decals">Stickers/Decals</option>
					  <option value="Others">Other</option>
					</select><br><br>
					<textarea type="text" name="details" rows="3" placeholder="Message/Details"></textarea><br><br>
					<button type="submit" class="btn" name="submit">Submit</button>
			</form>
		</div>
		<script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/loadpagecustom.js"></script>	
		<script src="js/mobilemenu.js"></script>
	</body>
	
	<?php include "include/footer.php"; ?>

</html>

