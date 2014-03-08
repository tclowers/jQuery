$.fn.priceify = function(options) {
	this.each(function() {
		var settings = $.extend({
			days: 3,
			vacation: $(this),
			price: $(this).data('price')
		}, options);
		var show = function() {
			if(settings.vacation.find('p').length === 0) {
				var details = $('<p>Book ' + settings.days + ' days for $' + (settings.days * settings.price) + '</p>');
				settings.vacation.find('button').hide();
				settings.vacation.append(details);
			}
		};
		var remove = function() {
			settings.vacation.fadeOut().off('.priceify');
		};
		settings.vacation.on('click.priceify', 'button', show);
		settings.vacation.on('show.priceify', show);
		settings.vacation.on('click.priceify', '.not-interested', remove);
	});
};

var showLink = function() {
	$(this).find('a').hide().css("visibility","visible").fadeIn('slow');
}

var hideLink = function() {
	$(this).find('a').fadeOut("slow", function() {
	    $(this).show().css({visibility: "hidden"});
	});
}

$(document).ready(function() {
	$('.vacation').priceify({ days: 5 });
	$('.show-prices').on('click', function(event){
		event.preventDefault();
		$('.vacation').trigger('show.priceify');
	});
	//event handlers
	$('.vacation').on('mouseenter', showLink);
	$('.vacation').on('mouseleave', hideLink);

})