var cityArray = new Array();
var latArray = new Array();
var lngArray = new Array();


$(document).ready(function () {
    $.getJSON("dataFiles/cities.json", function(data) {
        $("#cityList").html("");
        for (let i = 0; i < data.cities.length; i++) {
            cityArray[i] = data.cities[i].cityName;
            latArray[i] = data.cities[i].cityLat;
            lngArray[i] = data.cities[i].cityLng;
        
            $("#cityList").append(
                `
                    <li id='${i}'>
                        <a href='weather.html'>
                            ${data.cities[i].cityName}
                        </a>
                    </li>
                
                
                `
            );

            }
        localStorage.setItem("cityArray", JSON.stringify(cityArray));
        localStorage.setItem("cityLat", JSON.stringify(latArray));
        localStorage.setItem("cityLng", JSON.stringify(lngArray));
        
        
        
       
        
        
    })
});

$(document).on("click", "#cityList > li", function() {
    localStorage.setItem("rowID", $(this).closest("li").attr('id'))
})