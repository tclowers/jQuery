$(document).ready( function() {
	$('.fav').hide();
	$('button').on('click', function(){
		//event.preventDefault();
		$.ajax({
			url: 'favorite.php',
			type: 'GET',
			dataType: 'json',
			success: function(result) {
				$.each(result, function(index, fleet) {
					var favorite = $(".favorite-" + index);
					favorite.find('h3').html(fleet.name);
					favorite.find('img').attr('src', fleet.image);
					favorite.fadeIn('slow');
				});
			},
			error: function(request, errorType, errorMessage) {
				console.log('Error: ' + errorType + ' with message: ' + errorMessage);
			}
		});
	});
});