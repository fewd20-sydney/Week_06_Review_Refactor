var city = [
    "NYC",
    "SF",
    "LA",
    "ATX",
    "SYD"
  ];

var text;
for (i=0; i< city.length; i++) {
  console.log("i is:  " + i);
    var cityType = city[i];
    console.log("City is:  " + cityType);
    $('<option/>').val(cityType).text(cityType).appendTo($('#city-type'));
}

$('#city-type').change(function() {
  var city = $("#city-type").val();

  console.log("text" + city);

  if (city == "NYC") {
      $("body").css("background-image","url(./images/nyc.jpg)");
  } else if (city == "SF") {
      $("body").css("background-image","url(./images/sf.jpg)");
  } else if (city == "LA") {
      $("body").css("background-image","url(./images/la.jpg)");
  } else if (city == "ATX"){
    $("body").css("background-image","url(./images/austin.jpg)");
  } else if (city == "SYD") {
    $("body").css("background-image","url(./images/sydney.jpg)");
  } else {
    $("body").css("background-image", "url(./images/citipix_skyline.jpg)");
  }

});