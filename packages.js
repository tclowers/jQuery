var showPrice = function() {
	var vacation = $(this).closest('.vacation');
	var price = vacation.data('price');
	if(vacation.find('p').length === 0) {
		var details = $('<p>Book 3 days for only $' + (3 * price) + '</p>');
		vacation.append(details);
		vacation.off('click');
	}
}

$(document).ready(function() {
	//event handlers
	$('.vacation').on('click.price', 'button', showPrice);
	$('.vacation').on('show.price', showPrice);

	$('.show-prices').on('click', function(){
		$('.vacation').trigger('show.price');
	})
})