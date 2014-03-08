<?php

	class FlightStatus {
		public $name = "";
		public $status = "";
	}

	$flights = [];

	$a = new FlightStatus();
	
	$a->name = "JFK - New York, NY";
	$a->status = "Departing location";

	array_push($flights, $a);

	$b = new FlightStatus();
	$b->name = "DEN - Denver, CO";
	$b->status = "Connecting flight";

	array_push($flights, $b);

	$c = new FlightStatus();
	$c->name = "SFO - San Francisco, CA";
	$c->status = "Destination";

	array_push($flights, $c);


	echo json_encode($flights);
?>