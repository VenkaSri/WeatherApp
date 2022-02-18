
const cityName = document.querySelector(".city-name");
const cityInfo = document.querySelector(".city-type-time");
const cityTemp = document.querySelector(".city-temp");
const feelsLikeTemp = document.querySelector(".feelsLikeTemp p:last-child");
const currentTempIcon = document.querySelector(".current-icon");
const subBtn = document.querySelector('#submitButton');
const userInput = document.querySelector("#userInput");
let currentCity = 'Toronto';
const weatherConditions = new Array();
const dayNightStatusArr = new Array();
const wType = document.querySelector('.type');
const rainMArray = new Array();
const rainNArray = new Array();
const degFara = document.querySelector(".deg-f");
const degCel = document.querySelector(".deg-c");
let isSelected = true;

