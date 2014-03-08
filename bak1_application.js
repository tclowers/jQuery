var change = {
	init: function() {
		$("#change").click(this.loadMessage);

		//show picture
		$("#container").on('click', '.view-image', this.showPicture);
	}, //  <--all these methods inside this class are just objects so , not ;

	loadMessage : function() {
	//$.get('message.html', function(response){  // <--easier
		$.ajax({ url: 'message.html',
			success: function(response) {
			$("#container").html(response).slideDown("slow");
			},
			error: function(request, errorType, errorMessage) {
				alert('Error: ' + errorType + ' with message: ' + errorMessage);
			},
			timeout: 3000,
			beforeSend: function() {
				$("#change").addClass('is-loading');
			},
			complete: function() {
				$("#change").removeClass('is-loading');
			}
		});
	},

	showPicture: function() {
		$(".ship-image").fadeIn();
		event.preventDefault();
	}
}

$(document).ready(function(){
	change.init();
});