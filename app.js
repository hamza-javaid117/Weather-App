const  unsplashApi = `I031RVdkP37rAKy1TqiycVP3cuuVlpIhJEXg7zWMrAc`;
let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");
let currentCondition = document.getElementById("main-temp");
let feelLike = document.getElementById("feels-val");
let weatherdesc = document.getElementById("weather-desc");
let mainicon = document.getElementById("main-icon");
let windval = document.getElementById("wind-val");
let winddir = document.getElementById("wind-dir");
let humidityval = document.getElementById("humidity-val");
let uvval = document.getElementById("uv-val");
let Visibility = document.getElementById("vis-val");
let Pressure = document.getElementById("press-val");
let CloudCover = document.getElementById("cloud-val");


const weatherAPI = `aeeeb94a29184093abd151506262204`;

async function updateBackground(city) {
    const queryTerm = `${city}+landmark+architecture+attraction`;                                      
    const url = `https://api.unsplash.com/photos/random?query=${queryTerm}&client_id=${unsplashApi}&orientation=landscape&content_filter=high`;

    try {

        // if (!Response.ok) {
        //     alert("This City doesn't Exist");
        // }


        const response = await fetch(url);
        const data = await response.json()

        const imageUrl= data.urls.regular;

        const bgImg = document.querySelector(".background");
        bgImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imageUrl}')`;
        console.log("Background Change to ${city} image");
        
    } catch (error) {
        console.error("The background is not updated");
    }
}

async function dataUpdate(city) {
    try {
    const weatherURL = `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=${city}&days=1&aqi=no&alerts=no`
    const Response = await fetch(weatherURL);
    if (!Response.ok) {
        alert("This City doesn't Exist");
    }
    const data = await Response.json();
    console.log(data);
    currentCondition.innerText = data.current.temp_c+"°C"
    feelLike.innerText = data.current.feelslike_c+"°C";
    weatherdesc.innerText = data.current.condition.text;
    mainicon.src =  data.current.condition.icon;
    windval.innerText = data.current.wind_kph+"km/h";
    winddir.innerText = data.current.wind_dir;
    humidityval.innerText = data.current.humidity+"%";
    uvval.innerText = data.current.uv;
    Visibility.innerText = data.current.vis_km+"km";
    Pressure.innerText = data.current.pressure_mb+"mb";
    CloudCover.innerText = data.current.cloud+"%";
    
    } catch (error) {
        console.error("This is not a city")
    }


}


searchBtn.addEventListener("click",function() {
    let city = searchInput.value;
    console.log(city);
        if(searchInput !== ""){
            updateBackground(city)
            dataUpdate(city)

        }
        else{
            console.error("Please enter the image name");
        }
    
})

