// Enable document.ready
$( document ).ready(function(){
//Define arrays and options
	var select = document.getElementById("city-type");
	var city = ["NYC", "SF", "LA", "ATX", "SYD"];
//Using array and forloop to add value to append to drop-down selection
	for(var i=0; i < city.length; i++) {
		var opt = city[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
//Event listener for change handler in drop-down selection

	$("#city-type").change(function(e){
//Get input value within function to match css classes
		var city = $('#city-type').val().toLowerCase();
//if/else conditions to control flow of application 
		if (city == "nyc"){
		} else if (city == "sf") {
		} else if (city == "la") {
		} else if (city == "atx") {
		} else if (city == "syd") {
		}
//Umbrella function to attribute new classes to selected options
		$('#background').attr("class", city);
	});
});
