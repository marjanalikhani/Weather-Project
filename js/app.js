let inp=document.querySelector('input');
let btn=document.querySelector('button');
let city=document.querySelector('.city');
let image=document.querySelector('img');
let temp=document.querySelector('.temp');
let typew=document.querySelector('.typeWeather');
let container=document.querySelector('.container');


let API_key = "9916c103761beddef473b2673515ac73";




 async function Weather(search) {
     
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&lang={lang}`);

    let data = await response.json();


    
    console.log(data);

    city.innerHTML = data.name;
    temp.innerHTML = Math.floor((data.main.temp)-273.15) + "°C";
    typew.innerHTML = data.weather[0].main;




    if(typew.innerHTML == "Clouds"){
        image.src="../images/clouds.png"
    }else if(typew.innerHTML == "Clear"){
        image.src="../images/sun.png"
    }else if(typew.innerHTML == "Rain"){
        image.src="../images/rain.png"
    }else if(typew.innerHTML == "Snow"){
        image.src="../images/snow.png"
    }else if(typew.innerHTML == "Haze"){
        image.src="../images/foggy.png"
    }else if(typew.innerHTML == "Strom"){
        image.src="../images/windstorm.png"
    }
    input.value=""
 }
 
 



 btn.addEventListener('click', ()=>{
    container.classList.add('color');

   Weather(inp.value);

 })


