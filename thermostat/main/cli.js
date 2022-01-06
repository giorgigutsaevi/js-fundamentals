/* eslint-disable no-undef */

const Thermostat = require("./thermostat");
const readlineSync = require('readline-sync');

let thermostat = new Thermostat();

console.log(`Temperature is ${thermostat.startTemp} 🌡`);

// eslint-disable-next-line no-constant-condition
while(true){
	let userInput = readlineSync.question("Enter command > ")
	switch (userInput){
		case "up":
			thermostat.up();
			console.log(`Temperature is ${thermostat.getTemperature()} 🌡`);
			break;
		case "down":
			thermostat.down();
			console.log(`Temperature is ${thermostat.getTemperature()} 🌡`);
			break;
		case "psm off":
			thermostat.setPowerSavingMode(false)
			console.log('Power Saving Mode: DISABLED');
			break;
		case "psm on":
			thermostat.setPowerSavingMode(true)
			console.log('Power Saving Mode: ENABLED');
			break;
	}
}
