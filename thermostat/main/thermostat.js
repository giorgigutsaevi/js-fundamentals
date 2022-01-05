
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
				return 
			}else{
				this.startTemp += 1;
			}
		}else{
			this.maximumTemp = 32;
			if(this.startTemp >= this.maximumTemp){
				return 
			}else{
				this.startTemp += 1;
			}
		}
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

	reset(){
		return this.startTemp = 20;
	}


}

// thermo = new Thermostat();
// console.log(thermo.getTemperature());
// console.log(thermo.powerSavingMode);
// thermo.up()
// thermo.up()
// thermo.up()
// thermo.up()
// thermo.up()
// thermo.setPowerSavingMode(false);
// console.log(thermo.powerSavingMode);
// thermo.up()
// thermo.up()
// thermo.up()
// thermo.up()
// thermo.up()
// thermo.up()
// thermo.up()
// thermo.up()
// thermo.up()
// console.log(thermo.getTemperature());


module.exports = Thermostat;