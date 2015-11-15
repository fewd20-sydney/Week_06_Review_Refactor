
/*array = [‘NYC’, ’SF’, ‘LA’, ‘ATX’, ’SYD’];

For loop {
	Add items for users to select from dropdown
	append to current list.
}

(#selectid.change(function()) 

get selection.val() from dropdown list;

if (selection === ‘NYC’) {
	change css background to NYC image
}
else if (selection === ’SF’) {
	change css background to LA image
}
else if (selection === ‘LA’) {
	change css background to LA image
}
else if (selection === ‘ATX’) {
	change css background to LA image
}
else if (selection === ’SYD’) {
	change css background to LA image
}
else {
	keep background as original image
} */

var cityList = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
var city;

$(document).ready(function(){ 

	for (var i = 0; i < cityList.length; i++){
		var result = $('#city-type').append("<option>" + cityList[i] + "</option>");
	} 

	$('#city-type').change(function(){

		city = $("#city-type option:selected").val(); 

		    if (city === "NYC"){
				$('body').addClass('nyc');
			} else if (city === "SF"){
				$('body').addClass('sf');
			} else if (city === "LA"){
				$('body').addClass('la');
			} else if (city === "ATX"){
				$('body').addClass('austin');
			} else if (city === "SYD"){
				$('body').addClass('sydney');
			} else {
				$('body').css('backgroundImage','url(images/citipix_skyline.jpg)');
			}
	}) 

})
