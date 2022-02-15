
let city;
let cityDetail;
city = "Toronto";

$(document).ready(function () {
  console.log("ji");
  let apiURI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e71ec5fa96a769d7e32e9f4ccf84ae2`;
  getJSONData(apiURI);

  $("#submitButton").click(function () {
    getCity();
    let apiURI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e71ec5fa96a769d7e32e9f4ccf84ae2`;
    getJSONData(apiURI);
  });

  $.getJSON("dataFiles/clouds.json", function( data ) {

    cloudData(data);
  });

  $.getJSON("dataFiles/rain.json", function( data ) {

    rainData(data);
  });

});

function getCity() {
  city = document.querySelector("#userInput").value;
}

function getJSONData(url) {
  $.ajax({
    type: "GET",
    url: url,
    dataType: "jsonp",
    success: apiData,
  });
}

