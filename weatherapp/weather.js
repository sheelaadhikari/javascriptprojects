const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '85d0f4e135msh0eab08aa02e8674p1972a2jsne55a76e3639d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cloud_pct=document.getElementById("cloud_pct")
const temp=document.getElementById("temp")
const temp2=document.getElementById("temp2")

const min_temp=document.getElementById("min_temp")
const max_temp=document.getElementById("max_temp")
const humidity=document.getElementById("humidity")
const humidity2=document.getElementById("humidity2")

const sunrise=document.getElementById("sunrise")
const sunset=document.getElementById("sunset")
const wind_speed=document.getElementById("wind_speed")
const wind_speed2=document.getElementById("wind_speed2")

const feels_like=document.getElementById("feels_like")



const getWeather = (city) => {
	cityName.innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then(response => {


			console.log(response)


			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp

			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity

			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed

			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})

		.catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value);

})
getWeather("Kathmandu");