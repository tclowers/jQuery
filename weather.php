<?php

	class Weather {
		public $weather_code = "";
		public $weather = "";
	}


	$w = new Weather();
	
	$location = $_GET["q"];

	if($location == "paris,france") {
		$w->weather_code = 462;
		$w->weather = "Partly cloudy";
	} elseif ($location == "london,uk") {
		$w->weather_code = 462;
		$w->weather = "Heavy Rain";
	} elseif ($location == "madrid,spain") {
		$w->weather_code = 462;
		$w->weather = "Sunny skies";
	}

	echo json_encode($w);
?>