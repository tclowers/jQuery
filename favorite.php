<?php
	class Favorite {
		public $name = "";
		public $image = "";
	}

	$array = [];

	$f1 = new Favorite();
	$f2 = new Favorite();

	$f1->name = "The Federation";
	$f1->image = "Starship-Enterprise.jpg";


	$f2->name = "Romulan";
	$f2->image = "Dderidex.jpg";

	array_push($array, $f1, $f2);

	echo json_encode($array);
?>