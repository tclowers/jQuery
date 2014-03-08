$(document).ready(function(){
	$("#book_form").on('submit', function(event){
		console.log("form submit caught");
		event.preventDefault();
		var form = $(this);
		console.log("nothing broken yet");
		$.ajax({
			//url: 'book.php',
			url: form.attr('action'),
			type: 'POST',
			//contentType: 'application/json',
			dataType: 'json',
			data: form.serialize(),
			success: function(result) {
				console.log(result);
				console.log("success");
				form.remove();
				var msg = $("<p></p>");
				msg.append("Destination: " + result.destination + ". ");
				msg.append("Tickets: " + result.tickets + ". ");
				msg.append("Cost: " + result.cost + ".");
				//msg.append(result);
				$('#trip_info').hide().html(msg).fadeIn();
			},
			error: function(request, errorType, errorMessage) {
				console.log('Error: ' + errorType + ' with message: ' + errorMessage);
			}
	});
	});
});