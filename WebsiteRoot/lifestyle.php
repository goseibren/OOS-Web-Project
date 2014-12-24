<DOCTYPE! html>
<html>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
		<title>OOS Products</title>	
		<link rel="stylesheet" type="text/css" href="stylesheet/header.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/general-layout.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/custom.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/lifestyle.css">
		<meta name="viewport" content="initial-scale=1">
	</head>
	<body>
		
		<?php include "include/header.php"; ?>

		<div id="headercoloroverlay">
		</div>
		<div class="backgroundfixed" style="background-image: url('images/For the Lifestyle Page.jpg');">
			<div id="productheader">
				<p id="prodheadtext">LifeStyle</p>
			</div>
		</div>
		<div class="main-content">
			
			<div class="ourownlifestyle-title">
				<p>OurOwnLifeStyle Series</p>
			</div>


			<?php include "include/lifestyle_videos.php"; ?>
			<?php $videos = array_reverse($lifestyle_videos, true);?>
			<?php foreach($videos as $index => $video){ ?>

			<div class="episode episode-<?php echo $index + 1; ?>">
				Episode <?php echo $index + 1; ?>
			</div>
			<iframe src="http://player.vimeo.com/video/<?php echo $video->getUrl(); ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

			<?php } ?>



		</div>
		<script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/loadpagecustom.js"></script>	
		<script src="js/mobilemenu.js"></script>
	</body>

	<?php include "include/footer.php"; ?>
	
</html>
