<DOCTYPE! html>
<html>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
		<title>OOS Products</title>	
		<link rel="stylesheet" type="text/css" href="stylesheet/header.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/general-layout.css">
		<link rel="stylesheet" type="text/css" href="stylesheet/products2.css">
		<meta name="viewport" content="initial-scale=1">
	</head>
	<body>
		
		<?php include "include/header.php"; ?>


		<div id="headercoloroverlay">
		</div>
		<div class="backgroundfixed" style="background-image: url('images/headerpicture.jpg');">
			<div id="productheader">
				<p id="prodheadtext">DESIGNS</p>
			</div>
		</div>
		<div class="main-content">
		
			<ul id="shirts">

				<div class = "free-shipping-text">*FREE Shipping on all orders!*</div>
				
				<?php include "include/product.php" ?>
				<?php foreach($products as $product) { ?>

				<li>
					<div class="product-images">

						<?php foreach ($product->getFileNames() as $key => $imageUrl) {

							if($key === 0){ 
								$imgclass = "product-default";
							} else {
								$imgclass = "product-other";
							}
						?>

						<img class="<?php echo $imgclass; ?>" src="<?php echo $imageUrl ?>" ></img>

						<?php } ?>

					</div>

					<p class="product-name">"<?php echo $product->getName(); ?>" <?php echo get_class($product); ?> - <?php echo $product->getColor(); ?></p>
					<p class="product-cost">$<?php echo $product->getPrice(); ?></p>
					<p class="product-description"><?php echo $product->getDesc(); ?></p>

					<!-- **************************************** -->
					<!-- PASTE PAYPAL BUTTON CODE IN BETWEEN HERE -->
					<!-- **************************************** -->

					<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
						<input type="hidden" name="cmd" value="_s-xclick">
						<input type="hidden" name="hosted_button_id" value="<?php echo $product->getPaypalCode(); ?>">
						<table>
						<tr><td><input type="hidden" name="on0" value="Sizes">Sizes</td></tr><tr><td><select name="os0">

							<?php foreach($product->getSizes() as $size) { ?>

							<option value="<?php echo $size; ?>"><?php echo $size . " " . $product->getPrice() . " USD"; ?></option>

							<?php } ?>

						</select> </td></tr>
						</table>
						<input type="hidden" name="currency_code" value="USD">
						<input type="image" src="http://oi59.tinypic.com/2rf8q44.jpg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
						<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
					</form>

					<!-- **************************************** -->
					<!-- PASTE PAYPAL BUTTON CODE IN BETWEEN HERE -->
					<!-- **************************************** -->
					
				</li>

				<?php } ?>

			</ul>

			<script src="js/jquery-1.11.1.min.js"></script>
			<script src="js/loadpageproduct2.js"></script>
			<script src="js/mobilemenu.js"></script>
		</div> <!-- main content end -->

	</body>

	<?php include "include/footer.php"; ?>

	</html>