<?php
	
	class Product{

		protected $name;
		protected $file_names;
		protected $color;
		protected $price;
		protected $description;
		protected $paypalcode;

		function __construct($name, $color, $price, $sizes, $description, $file_names, $paypalcode){
			$this->name = $name;
			$this->file_names = $file_names;
			$this->color = $color;
			$this->price = $price;
			$this->description = $description;
			$this->paypalcode = $paypalcode;
			$this->sizes = $sizes;
		}

		//get functions

		public function getName(){
			return $this->name;
		}

		public function getFileNames(){
			return $this->file_names;
		}

		public function getColor(){
			return $this->color;
		}

		public function getPrice(){
			return $this->price;
		}

		public function getDesc(){
			return $this->description;
		}

		public function getPaypalCode(){
			return $this->paypalcode;
		}
		public function getSizes(){
			return $this->sizes;
		}

		//Set Functions

		public function setName($name){
			$this->name = $name;
		}

		public function setFileName($file_name){
			$this->file_name = $file_name;
		}

		public function setColor($color){
			$this->color = $color;
		}

		public function setPrice($price){
			$this->price = $price;
		}

		public function setDesc($description){
			$this->description = $description;
		}

		public function setPaypalcode($paypalcode){
			$this->paypalcode = $paypalcode;
		}

		public function __toString(){
			$output = "name: ". $this->name . "\n";
			$output .= "file name: ". $this->file_name . "\n";
			$output .= "color: ". $this->color . "\n";
			$output .= "price: ". $this->price . "\n";

			return $output;
		}
	}

	class Shirt extends Product{

	}

	class Sweatshirt extends Product{

	}

	class Sweatpant extends Product{

	}

	$shirt_price = 18.95;
	$shirt_desc = "Adult 6.1 Oz 100% Preshrunk Cotton";
	$shirt_sizes = array("Small", "Medium", "Large", "X-Large");

	$sweatshirt_price = 28.95;
	$sweatshirt_desc = "Adult 8 Oz. 50% Cotton 50% Polyester";
	$sweatshirt_sizes = array("Small", "Medium", "Large", "X-Large");

	$sweatpant_price = 22.95;
	$sweatpant_desc = "Adult 8 Oz. 50% Cotton 50% Polyester <br> *Sweats run 1 size larger";
	$sweatpant_sizes = array("Small", "Medium", "Large");

	//add all OOS products here. Displays in order. first image url in array is default image.

	$products = array();

	$products[] = new Shirt("JD", "Black", $shirt_price, $shirt_sizes, $shirt_desc, array(

		"images/products/JD/JD Tshirt Black Back.png",
		"images/products/JD/JD Tshirt Black Front.png",
		"images/products/JD/JD Front Logo.png",
		"images/products/JD/JD Logo Back.png"

	), "V8BPXRC6LHK7E");

	$products[] = new Shirt("JD", "White", $shirt_price, $shirt_sizes, $shirt_desc, array(

		"images/products/JD/JD Tshirt White Back.png",
		"images/products/JD/JD Tshirt White Front.png",
		"images/products/JD/JD Front Logo White.png",
		"images/products/JD/JD Logo Back White.png"

	), "BJFD3RSFCVTXE");

	$products[] = new Sweatshirt("JD", "Black", $sweatshirt_price, $sweatshirt_sizes, $sweatshirt_desc, array(

		"images/products/JD/JD Sweatshirt Black Back.png",
		"images/products/JD/JD Sweatshirt Black Front.png",
		"images/products/JD/JD Front Logo.png",
		"images/products/JD/JD Logo Back.png"

	), "ZP4SJASF9554Q");

	$products[] = new Shirt("RISING", "Black", $shirt_price, $shirt_sizes, $shirt_desc, array(

		"images/products/RISING/RISING Tshirt Black.png",
		"images/products/RISING/RISING Logo.png"

	), "B47W7Z6VYUXTG");
	
	$products[] = new Sweatshirt("RISING", "Black", $sweatshirt_price, $sweatshirt_sizes, $sweatshirt_desc, array(

		"images/products/RISING/RISING Sweatshirt Black.png",
		"images/products/RISING/RISING Logo.png"

	), "A2DTECRU6QSA4");

	$products[] = new Sweatshirt("RISING", "Gray", $sweatshirt_price, $sweatshirt_sizes, $sweatshirt_desc, array(

		"images/products/RISING/RISING Sweatshirt Gray.png",
		"images/products/RISING/RISING Logo Gray.png",

	), "69P4NUEBQTAJL");

	$products[] = new Shirt("KING", "Black", $shirt_price, $shirt_sizes, $shirt_desc, array(

		"images/products/KING/KING Tshirt.png",
		"images/products/KING/KING Logo.png"

	), "CSR9Z9TLAP58U");

	$products[] = new Shirt("SLICED", "Black", $shirt_price, $shirt_sizes, $shirt_desc, array(

		"images/products/SLICED/SLICED Back Black.png",
		"images/products/SLICED/SLICED Front Black.png",
		"images/products/SLICED/SLICED Logo Back.png",
		"images/products/SLICED/SLICED Logo Front.png"

	), "BMZN4RPY7T8ZW");

	$products[] = new Shirt("SLICED", "White", $shirt_price, $shirt_sizes, $shirt_desc, array(

		"images/products/SLICED/SLICED Back White.png",
		"images/products/SLICED/SLICED Front White.png",
		"images/products/SLICED/SLICED Logo Back White.png",
		"images/products/SLICED/SLICED Logo Front White.png"

	), "UHYGZLAE27CN6");

	$products[] = new Sweatpant("ONE", "Black", $sweatpant_price, $sweatpant_sizes, $sweatpant_desc, array(

		"images/products/ONE/ONE Sweats Side.png",
		"images/products/ONE/ONE Sweats Front.png",
		"images/products/ONE/ONE Sweats Logo.png"

	), "BV77CA6H3RCQE");

	$products[] = new Sweatpant("CORP", "Black", $sweatpant_price, $sweatpant_sizes, $sweatpant_desc, array(

		"images/products/CORP/CORP Sweats Front.png",
		"images/products/CORP/CORP Sweats Logo.png"

	), "9GZRGLXQ4XE98");

	$products[] = new Sweatpant("SIGNATURE", "Black", $sweatpant_price, $sweatpant_sizes, $sweatpant_desc, array(

		"images/products/SIGNATURE/SIGNATURE Sweats Side.png",
		"images/products/SIGNATURE/SIGNATURE Sweats Front.png",
		"images/products/SIGNATURE/SIGNATURE Sweats Logo.png"

	), "AYP6YG6WFL53L");

	$products[] = new Sweatpant("SIGNATURE", "Gray", $sweatpant_price, $sweatpant_sizes, $sweatpant_desc, array(

		"images/products/SIGNATURE/SIGNATURE Sweats Gray Side.png",
		"images/products/SIGNATURE/SIGNATURE Sweats Gray Front.png",
		"images/products/SIGNATURE/SIGNATURE Sweats Gray Logo.png"

	), "FYWKC7V8FJNVN");


?>