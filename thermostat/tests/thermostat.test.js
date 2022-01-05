
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

})