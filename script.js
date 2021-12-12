const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');
const API_Key = "9e33b9f4e5f351a40210e6e32252a463";

button.addEventListener('click', () => {
    const cityInput = inputTxt.value;
    //console.log(cityInput);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        inputTxt.value = " ";
        showData.innerHTML = `
                            <ul>
                                   
                                <li class="city">${data.name},${data.sys.country}</li>
                                <li class="desc">${data.weather[0].description}</li>
                                <li class="temp">${data.main.temp}°C</li>    
                            </ul>

                            `;
        });
});
