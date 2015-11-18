//I create a variable for each city to display in the dropdown
var city = ['NYC','SF','LA','ATX','SYD'];

//When the document is ready I call a function
$(document).ready(function() {

	//I display the variable City in the dropdown
	for (var i=0; i<city.length; i++){
		var text = '<option>'+city[i]+'</option>';
		$("#city-type").append(text);
	}

	//The user change the value of the dropdown
	$("#city-type").change(function(){
		var selectCity = $(this).val(); // with this variable, the computer keep the value

		//This is the condiction of what happens if NYC is selected
		if (selectCity === 'NYC'){
			$('body').attr('class','nyc');
			//Here I used the .attr to replace the addClass
			//And I choose what to define for the attribute Class of the Body.
		}
		else if (selectCity === 'SF'){
			$('body').attr('class','sf');
		}
		else if (selectCity === 'LA'){
			$('body').attr('class','la');
		}
		else if (selectCity === 'ATX'){
			$('body').attr('class','austin');
		}
		else if (selectCity === 'SYD'){
			$('body').attr('class','sydney');
		}
		else{
			$('body').attr('class','background');
			//The last else is used to upload the default background image
		}
	});

});
