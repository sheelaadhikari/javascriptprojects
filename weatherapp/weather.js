const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '85d0f4e135msh0eab08aa02e8674p1972a2jsne55a76e3639d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kathmandu', options)
	.then(response => response.json())
	.then(response => {

		
		console.log(response)


		cloud_pct = respose.cloud_pct
		temp = respose.temp
		feels_like = respose.feels_like
		humidity = respose.humidity
		min_temp = respose.min_temp
		max_temp = respose.max_temp
		wind_speed = respose.wind_speed
		wind_degrees = respose.wind_degrees
		sunrise = respose.sunrise
		sunset = respose.sunset
	})

	.catch(err => console.error(err));