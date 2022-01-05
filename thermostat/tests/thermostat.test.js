
const Thermostat = require("../main/thermostat")

describe("Thermostat class", () => {

	beforeEach(()=>{
		test = new Thermostat();
	})

	it("creates an instance of itself", () => {
		expect(test).toBeInstanceOf(Thermostat)
	})

	it("Thermostat starts with a default temperature of 20", () => {
		expect(test.startTemp).toEqual(20)
	})

	it("has a getTemperature() method", () => {
		expect(typeof test.getTemperature).toBe("function")
	})

	it("Initially getTemperature() returns Thermostat's default temp of 20", () => {
		expect(test.getTemperature()).toEqual(20)
	})

	it("has an up() method, that increases temperature by 1", () => {
		Array.from({length: 5}, (x, i)=>{
			test.up()
		})
		expect(test.getTemperature()).toEqual(25)
	})

	it("has a down() method, that decreases temperature by 1", () => {
		Array.from({length: 5}, (x, i)=>{
			test.down()
		})
		expect(test.getTemperature()).toEqual(15)
	})

	it("has a minimum possible temperature of 10 degrees", ()=>{
		// I'm iterating down() 15 times, technically it should yield a temp of 5 degrees
		// But because of the if block 'guard clause' it won't go below 10
		Array.from({length: 15}, (x, i)=>{
			test.down()
		});
		expect(test.getTemperature()).toEqual(10);
	})

	it("has a powerSavingMode attribute, which is enabled by default", () => {
		expect(test.powerSavingMode).toEqual(true)
	})

	it("has a setPowerSavingMode()) method, that enables or disables the powerSavingMode", () => {
		expect(test.setPowerSavingMode(false)).toEqual(false)
	})

	it("has a reset() method, that resets temperature to a default temperature of 20", () => {
		Array.from({length: 5}, (x, i)=>{
			test.up()
		})
		expect(test.reset()).toEqual(20)
	})

	it("powerSavingMode dictates what max temperature thermostat can reach (with PSM ON, it's 25 degrees)", () => {
		// Starting temp is 20, and by default PSM is on, so if I iterate 10 more times, my thermo temp should not exceed 25
		Array.from({length: 10}, (x, i)=>{
			test.up()
		})
		expect(test.getTemperature()).toEqual(25)
	})

	it("powerSavingMode dictates what max temperature thermostat can reach (with PSM OFF, it's 32 degrees)", () => {
		// Starting temp is 20, and with PSM OFF, so if I iterate 20 more times, my thermo temp should not exceed 32 degrees
		test.setPowerSavingMode(false)
		Array.from({length: 20}, (x, i)=>{
			test.up()
		})
		expect(test.getTemperature()).toEqual(32)
	})


})