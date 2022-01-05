
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

})