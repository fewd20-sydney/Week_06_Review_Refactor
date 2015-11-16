function main () {

	$( "input" ).click(function(event) {
  		event.preventDefault()
	});

	// available cities in array
	var cities = [{
		name: "New York City",
		abbreviation: "NYC"
	}, {
		name: "San Francisco",
		abbreviation: "SF"
	}, {
		name: "Los Angeles",
		abbreviation: "LA"
	}, {
		name: "Austin",
		abbreviation: "ATX"
	}, {
		name: "Sydney",
		abbreviation: "SYD"
	}];

	// loop through the cities
	for (var i = 0; i < cities.length; i++) {
		// add the city abbreviation to value, add city name to option text
		$('#city-type').append('<option value="'+cities[i]['abbreviation']+'">'+cities[i]['name']+'</option>');
	};

	// When the city is selected from dropdown
	$('#city-type').change(function() {
		// set city to the value of the input field		
		var city = $('#city-type').val();
		// find the correct value
		if (city === "SYD") {
			// change the background image to the city's image
			$('body').attr('class', 'sydney')
		} else if (city === "LA") {
			$('body').attr('class', 'la')
		} else if (city === "NYC") {
			$('body').attr('class', 'nyc');
		} else if (city === "ATX") {
			$('body').attr('class', 'austin');
		} else if (city === "SF") {
			$('body').attr('class', 'sf')
		}
		// reset the input field
		$('#city-type').val('Select a city');

	});
}

$(document).ready(main);
