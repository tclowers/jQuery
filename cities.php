<?php
	$location = $_GET["loc"];

	if($location == "london,uk") {
		$result = "<image src='london.jpg' /><p>London is very nice.</p>";
	} elseif ($location == "paris,france") {
		$result = "<image src='paris.jpg' /><p>Paris is beautiful.</p>";
	} elseif ($location == "madrid,spain") {
		$result = "<image src='madrid.jpg' /><p>Madrid is great.</p>";
	} else {
		#invalid location
	}

	echo $result;
?>