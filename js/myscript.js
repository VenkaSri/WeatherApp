class APIURL {
  constructor(city) {
    this.city = city;
  }

  updateCity(currCity) {
    this.city = currCity;
    currentCity = currCity;
  }

  sendURL() {
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=5e71ec5fa96a769d7e32e9f4ccf84ae2`;
    return apiURL;
  }

  clearFocusField() {
    userInput.value = '';
    userInput.focus();
  }



}


const url = new APIURL(currentCity);
$(document).ready(function () {
  getJSONData();
  
  $.getJSON("dataFiles/rain.json", function( data ) {

    rainData(data);
  });
});

function getJSONData() {
  $.ajax({
    type: "GET",
    url: url.sendURL(),
    dataType: "jsonp",
    success: apiData,
  });

}

subBtn.addEventListener('click', () => {
  url.updateCity(userInput.value);
  getJSONData();
  url.clearFocusField();
});

document.onkeydown = (e) => {
  if(e.key === 'Enter') {
    url.updateCity(userInput.value);
    getJSONData();
    url.clearFocusField();
  }
}