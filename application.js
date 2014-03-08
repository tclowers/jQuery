function Change(el) {
	this.el = el;
	this.message = this.el.find(".message");
	var change = this;
	console.log("el: " + el.name);

	//helper methods go here
	this.loadMessage = function() {
	//$.get('message.html', function(response){  // <--easier
		$.ajax({ url: 'message.html',
			timeout: 3000,
			context: change,
			success: function(response) {
			this.message.html(response).slideDown();
			//$(".message").html(response).slideDown();
			},
			error: function(request, errorType, errorMessage) {
				alert('Error: ' + errorType + ' with message: ' + errorMessage);
			},
			beforeSend: function() {
				$(".showMessage").addClass('is-loading');
			},
			complete: function() {
				$(".showMessage").removeClass('is-loading');
			}
		});
		event.preventDefault();
	}

	this.showPicture = function() {
		event.preventDefault();
		$(this).hide();
		change.el.find(".ship-image").fadeIn();
	}

	//event handlers go here
	this.el.on('click', '.showMessage', this.loadMessage);
	this.el.on('click', '.view-image', this.showPicture);
}

$(document).ready(function(){
	var enterprise = new Change($("#enterprise"));
	var romulan = new Change($("#romulan"));
});