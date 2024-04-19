// UI
const cityInput = document.getElementById("cityInput")
const getWeatherBtn = document.getElementById("getWeatherBtn")
const outputContainer = document.getElementById("outputContainer")

// Output
const city = document.getElementById("city")
const temp = document.getElementById("temp")
const hum = document.getElementById("hum")
const desc = document.getElementById("desc")

const apiKey = "7e2406ddbe12c5ba246531e72fb9b982"

getWeatherBtn.addEventListener("click" , ()=> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`
    fetch(url)
        .then((res)=>{if(!res.ok){throw new Error("Fail to load")} return res.json()})
        .then(data => updatesValues(data))
        .catch(e => console.log(e))
})

function updatesValues(data){
    outputContainer.style.visibility = "visible"
    city.textContent = data.name
    temp.textContent = `${Math.round(data.main.temp - 273.15)}°`
    hum.textContent = `${data.main.humidity}%`
    desc.textContent = data.weather[0].description
    desc.style.fontStyle = "italic"
}