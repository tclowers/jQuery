var Weather = {
	today: function(location){
		var promise = $.Deferred();
		$.ajax({
			url: 'weather.php',
			data: {q: location},
			dataType: 'json',
			success: function(result){
				promise.resolve(result.weather);
			},
			error: function(){
				var error = 'Invalid location';
				promise.reject(error);
			}
		});
		return promise;
	}
}

var City = {
	find: function(location) {
		var promise = $.Deferred();
		$.ajax({
			url: 'cities.php',
			data: {loc: location},
			success: function(result) {
				promise.resolve(result);
			}
		});
		return promise;
	}
}



$(document).ready(function(){
	$('button').on('click', function(){
		$(this).hide();
		var loc = $(this).parent().data('loc');
		var resultsDiv = $(this).parent().find('.results').empty();
		$.when (
			Weather.today(loc),
			City.find(loc)
		).then (function(weatherResult,cityResult){
			resultsDiv.append(cityResult);
			resultsDiv.append("<p>" + weatherResult + "</p>");
		})
	});
});

/*
$(document).ready(function(){
	$('button').on('click', function(){
		console.log('click');
		var location = $('.loc').text();
		var todayPromise = Weather.today(location);
		todayPromise.done(function(result) {
			console.log('done');
			$('.weather').text(result);
		}).fail(function(error){
			console.log(error);
		});
	});
});
*/