
class Thermostat{

	constructor(){
		this.startTemp = 20;
	}

	getTemperature(){
		return this.startTemp
	}

	up(){
		return this.startTemp += 1
	}

	down(){
		return this.startTemp -= 1
	}

}

module.exports = Thermostat;