
class Thermostat{

	constructor(){
		this.startTemp = 20;
		this.powerSavingMode = true;
		this.minimumTemp = 10;
	}

	getTemperature(){
		return this.startTemp
	}

	up(){
		return this.startTemp += 1
	}

	down(){
		if(this.startTemp <= this.minimumTemp){
			return
		}else{
			this.startTemp -= 1
		}
	}
	setPowerSavingMode(bool){
		return this.powerSavingMode = bool;
	}


}

module.exports = Thermostat;