// import got from "got";
import axios from 'axios';
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: __dirname + `/../.env` }); 


class Weather{
	constructor(){
		this.apiKey = `${process.env.API_KEY}`
	}
	fetchWeatherData(city, callback){
		axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`)
		.then( (res) => {
			let data = res.data
			console.log(data);
		})
	}
}

let weather = new Weather();
weather.fetchWeatherData('London', (response)=>{
	console.log(response);
});
