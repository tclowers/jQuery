$(document).ready(function() {
	$('button').click(function(){
		event.preventDefault();
		console.log("clicked");
		$.getJSON('flight_status.php', function(result) {
			console.log('success');
			var all_flights = $.map(result, function(status, i) {
				var list_item = $("<div class='flight'></div>");
				$("<h3>" + status.name + "</h3>").appendTo(list_item);
				$("<p>" + status.status + "</p>").appendTo(list_item);
				return list_item;
			});
			$('.flights').detach().html(all_flights).appendTo('.status');
		})
	})
})