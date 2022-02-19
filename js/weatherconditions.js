class Weather {
  constructor(id, desc, icon) {
    this.id = id;
    this.desc = desc;
    this.icon = icon;
  }
}


function weatherData(data) {
if(dayOrNight === 'night') {
  switch(typeOfWeather) {
    case 'Clouds': 
    addToArray(data.night.clouds) ;
      break;
    case 'Clear': 
      addToArray(data.night.clear) ;
      break;
    default:
      break;
  }
} else {
  switch(typeOfWeather) {
    case 'Clouds': 
      addToArray(data.night.clouds) ;
      break;
    case 'Clear': 
      addToArray(data.night.clear) ;
      break;
    default:
      break;
  }
}


}

//[rainMArray, cloudMArray, thunderMArray]



function addToArray(wData) {
  for(let x of wData) {
    if(x.id === weatherID) {
      console.log(x.desc);
      cityInfo.innerHTML = x.desc;
      currentTempIcon.innerHTML = `<img src="images/icons/${x.img}">`;
    }
  }

}