<?php
	class Trip {
		public $destination = "";
		public $tickets = 0;
		public $cost = 0;
	}

	$t = new Trip();
	#$in = json_decode(file_get_contents('php://input'));
	#$t->destination = $in->destination;
	#$t->tickets = $in->tickets;
	#$t->cost = "$" . (300 * $in->tickets);
	
	$t->destination = $_POST["destination"];
	$t->tickets = $_POST["tickets"];
	$t->cost = "$" . (300 * $_POST["tickets"]);

	echo json_encode($t);
?>