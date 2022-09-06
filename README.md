# WeatherApp

[Click here for a live preview](https://venkasri.github.io/WeatherApp/)

I had so much fun creating this application, although not from scratch, but I still learned ALOT!

I took a Web Based Application course from where I'm currently studying, where our professor showed us an example of a very simple weather app using OpenWeatherAPI. 


### Endpoint prof used: 
 
``` https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}' ``` 

### Here is how our prof's app looked like: 

![Ex app](https://i.imgur.com/St5bEbs.png)

List of cities shown are pulled from a hard coded JSON file with their longitude and latitude, so when you click on it, the city's basic weather information displayed.

### Here is what it looked like once you click on a city (no data is shown)
![Static site](https://i.imgur.com/9kc9442.png)

This course was my introduction to APIs, I really enjoyed learning about it, and it made me want to learn more about the weather API and about APIs in general. Then, I went on https://openweathermap.org/current to see what else I can do with the openweatherAPI. Upon reading the documentation, I found a endpoint which accepts city name as a parameter. That's how I started to work on this app. 

### Endpoint I used:
 ``` https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} ```


## Demo
![App Demo](https://i.imgur.com/AY2XdNo.gif)








