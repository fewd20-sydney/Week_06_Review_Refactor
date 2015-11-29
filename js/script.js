$(window).ready(function () {

	var city;
	var cities = ['NYC','SF','LA','ATX','SYD'];

	var x;
	for (x = 0; x < cities.length; x++) {
	  $('#cities').append('<option value="' + cities[x] + '">' + cities[x] + '</option>')
	}

	$("#cities").on("change", function (e) {
		//stop the browser from refreshing the page
		e.preventDefault();

		//get user input 
		city = $("#cities").val().toLowerCase();

		//Remove all classes from body to prevent issues with changing to a background then reverting back
		$("body").removeClass();

		//Add the relevant class from the registry object
		$("body").addClass(city);

	});

})