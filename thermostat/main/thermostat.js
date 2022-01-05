
class Thermostat{

	constructor(){
		this.startTemp = 20;
		this.powerSavingMode = true;
		this.minimumTemp = 10;
		this.maximumTemp = 25;

	}

	getTemperature(){
		return this.startTemp
	}

	up(){
		if(this.powerSavingMode){
			this.maximumTemp = 25;
			if(this.startTemp >= this.maximumTemp){
				console.log('Maximum temperature reached 🥵');
				return 
			}else{
				this.startTemp += 1;
			}
		}else{
			this.maximumTemp = 32;
			if(this.startTemp >= this.maximumTemp){
				console.log('Maximum temperature reached 🥵');
				return 
			}else{
				this.startTemp += 1;
			}
		}
	}

	down(){
		if(this.startTemp <= this.minimumTemp){
			console.log('Minimum temperature reached 🥶');
			return
		}else{
			this.startTemp -= 1
		}
	}
	setPowerSavingMode(bool){
		return this.powerSavingMode = bool;
	}

	reset(){
		return this.startTemp = 20;
	}

	currentEnergyUsage(){
		if(this.startTemp < 18){
			return 'low-usage'
		}else if(18 <= this.startTemp && this.startTemp <= 25){
			return 'medium-usage'
		}else{
			return 'high-usage'
		}
	}
}


module.exports = Thermostat;


