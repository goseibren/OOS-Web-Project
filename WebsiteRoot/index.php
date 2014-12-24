<DOCTYPE! html> <!-- ajax-sass-php branch -->
<html>
<head>
	<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
	<title>OurOwnStyle</title>	
	<link rel="stylesheet" type="text/css" href="stylesheet/home.css">
	<link rel="stylesheet" type="text/css" href="stylesheet/header.css">
	<meta name="viewport" content="initial-scale=1">
	<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>-->
</head>

<body>
	
	<?php include "include/header.php"; ?>
	
	<div class = "slider-viewer">
		<div class = "slider-wrapper">
			<ul class="slide-group">
				<div class="slide slide-1" style="background-image: url('images/Homepage_Pictures/slideshow1.jpg');"></div>
				<div class="slide slide-2" style="background-image: url('images/Homepage_Pictures/slideshow2.jpg');"></div>
				<div class="slide slide-3" style="background-image: url('images/Homepage_Pictures/slideshow3.jpg');"></div>
				<div class="slide slide-4" style="background-image: url('images/Homepage_Pictures/slideshow4.jpg');"></div>
				<div class="slide slide-5" style="background-image: url('images/Homepage_Pictures/slideshow5.png');"></div>
				<div class="slide slide-5" style="background-image: url('images/Homepage_Pictures/slideshow6.jpg');"></div>
			</ul>
			<div id="slide-buttons">
			</div>
			<div id="arrow-buttons">
			</div>
		</div>
	</div>
	<div class="footertext">
		Torrance, CA <br> &copy 2014 OurOwnStyle
	</div>
	<script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/slider.js"></script>
	<script src="js/loadpage.js"></script>
	<script src="js/mobilemenu.js"></script>
</body>
</html>