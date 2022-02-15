class clouds {
  constructor(id, desc, icon) {
    this.id = id;
    this.desc = desc;
	this.icon = icon;
  }
}

const morningCloudsArray = new Array();
const nightCloudsArray = new Array();
const cityName = document.querySelector(".city-name");
const cityInfo = document.querySelector(".city-type-time");
const cityTemp = document.querySelector(".city-temp");
const currentTempIcon = document.querySelector(".current-icon");

function apiData(response) {
	console.log(response);
  
  cityName.innerHTML = response.name;

  const timezone = response.timezone; //needs to be converted in minutes
  const timezoneInMinutes = timezone / 60;
  const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");
  for (let x of morningCloudsArray) {
    if (x.id === response.weather[0].id) {
		cityInfo.innerHTML = `${x.desc} | ${currTime}`;
    }

  }
  
 if((response.weather[0].icon).includes('d')) {
	 console.log('Day');
	 for (let x of nightCloudsArray) {
		// currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
		if (x.id === response.weather[0].id) {
			currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
		}
	  }
 } else {
	console.log('Night');
	for (let x of nightCloudsArray) {
		// currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
		if (x.id === response.weather[0].id) {
			currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
			cityInfo.innerHTML = `${x.desc} | ${currTime}`;
		}
	  }
 }

if(response.sys.country !== "US") {
	cityTemp.innerHTML = `${calculateCelsousTemp(response)}<span class="temp-deg">&deg;C</span>` ;
} else {
	cityTemp.innerHTML = `${calculateFaraTemp(response)}<span class="temp-deg">&deg;F</span>` ;
}
  


}




function jsonData(data) {
  for (let i of data.dayCloudStatus) {
    morningCloudsArray.push(new clouds(i.id, i.desc, i.img));
  }
  for (let i of data.nightCloudStatus) {
    nightCloudsArray.push(new clouds(i.id, i.desc, i.img));
  }
}

function calculateCelsousTemp(data) {
	let temp = data.main.temp;
	let currTemp = temp - 273;
	return currTemp.toFixed(0);
}

function calculateFaraTemp(data) {
	let temp = data.main.temp;
	let currTemp = (temp - 273) * (9/5) + 32;
	return currTemp.toFixed(0);
}