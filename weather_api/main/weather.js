/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import got from 'got';
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: __dirname + `/../.env` }); 

class Weather{
	fetchWeatherData(city, callback){
		got(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.API_KEY}`)
		.then( res => {
			let data = JSON.parse(res.body)
			callback(data)
		})
	}
}
let weather = new Weather();
weather.fetchWeatherData('London', (response)=>{
	console.log(response);
});