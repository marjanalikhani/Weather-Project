let inp = document.querySelector('input');
let btn = document.querySelector('button');
let city = document.querySelector('.city');
let image = document.querySelector('img');
let temp = document.querySelector('.temp');
let typew = document.querySelector('.typeWeather');
let container = document.querySelector('.container');
let err = document.querySelector('.err');

let API_key = "9916c103761beddef473b2673515ac73";
inp.focus();

//------------------------ Weather Function-------------------

async function Weather(search) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&lang={lang}`);

    let data = await response.json();


    console.log(data);

    city.innerHTML = data.name;
    temp.innerHTML = Math.floor((data.main.temp) - 273.15) + "°C";
    typew.innerHTML = data.weather[0].main;




    if (typew.innerHTML == "Clouds") {
        image.src = "../images/clouds.png"
    } else if (typew.innerHTML == "Clear") {
        image.src = "../images/sun.png"
    } else if (typew.innerHTML == "Rain") {
        image.src = "../images/rain.png"
    } else if (typew.innerHTML == "Snow") {
        image.src = "../images/snow.png"
    } else if (typew.innerHTML == "Haze") {
        image.src = "../images/foggy.png"
    } else if (typew.innerHTML == "Strom") {
        image.src = "../images/windstorm.png"
    }
}



//------------------------ Click Search Button-------------------


btn.addEventListener('click', () => {

    err.innerHTML = "";

    container.classList.add('color');
    Weather(inp.value);


    let result = Weather(inp.value);


    result.catch(function erro() {

        city.innerHTML = "";
        temp.innerHTML = "";
        typew.innerHTML = "";
        image.src = "";
        err.innerHTML = "No Result Found";

    })

    inp.value = "";

});





inp.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        err.innerHTML = "";

        container.classList.add('color');
        Weather(inp.value);


        let result = Weather(inp.value);


        result.catch(function erro() {

            city.innerHTML = "";
            temp.innerHTML = "";
            typew.innerHTML = "";
            image.src = "";
            err.innerHTML = "No Result Found";

        })

        inp.value = "";
        // event.preventDefault();

    }
});




