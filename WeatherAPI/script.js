const fetchBtn = document.getElementById('fetch-btn');
const weatherContainer = document.querySelector('.weather-details');
let lat,long,city,temp;
let apiKey = 'get it form here: https://home.openweathermap.org/api_keys'
fetchBtn.addEventListener('click',(e) => {
         navigator.geolocation.getCurrentPosition(async (position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
            const jsonRes = await res.json();   
            const detailEle = document.createElement('div');
            detailEle.innerHTML = `City: ${jsonRes.name}<br/>Temperature: ${jsonRes.main.temp}<br/>Min Temp: ${jsonRes.main.temp_min}<br/>Max Temp: ${jsonRes.main.temp_max}`
            weatherContainer.appendChild(detailEle);
        });
});
