$(document).ready(function() {
	//DOM elements loaded first

	var cityArray = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
	// array/list of city options for dropdown menu

	for(var i = 0; i < cityArray.length; i++){
		var cityResult = $('#city-type').append('<option>'+cityArray[i]+'</option>');	
	}
	//created a for loop so the items in the array appear as values in the drop down menu

	$('#city-type').change(function(){
		city = $('#city-type option:selected').val();
		//capturing the users actions when selecting an option from the drop down menu, applied a val to shorten the code

			if (city === "NYC") {
				$('body').attr('class','nyc');
				//changes background to image of NYC by assigning the nyc class attr

			} else if (city === "SF") {
				$('body').attr('class','sf');
				//changes background to image of San Fran by assigning the sf class attr

			} else if (city === "LA") {
				$('body').attr('class','la');
				//changes background to image of LA by assigning the la class attr

			} else if (city === "ATX") {
				$('body').attr('class','austin');
				//changes background to image of Austin TX by assigning the austin class attr

			} else if (city === "SYD") {
				$('body').attr('class','sydney');
				//changes background to image of SYD by assigning the sydney class attr

			} else {
				$('body').removeAttr('class');
				//removes previous class attr assigned to the body and returns to the default background image
			}
	});
});
