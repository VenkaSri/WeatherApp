
const cityName = document.querySelector(".city-name");
const cityInfo = document.querySelector(".wCond");
const cityTemp = document.querySelector(".city-temp");
const feelsLikeTemp = document.querySelector(".feelsLikeTemp p:last-child");
const currentTempIcon = document.querySelector(".current-icon");
const subBtn = document.querySelector('#submitButton');
const userInput = document.querySelector("#userInput");
const weatherConditions = new Array();
const dayNightStatusArr = new Array();
const wType = document.querySelector('.type');
const weatherArray = new Array();
const degFara = document.querySelector(".deg-f");
const degCel = document.querySelector(".deg-c");
const currentTime = document.querySelector(".time");
const currentDate = document.querySelector(".date");
const windData = document.querySelector(".wind-data");
const humidityData = document.querySelector(".humidity-data");
const pressureData = document.querySelector(".pressure-data");
let currentCity = 'Toronto';
let isSelected = true;
let typeOfWeather = '';
let dayOrNight = '';
let weatherID = '';     

