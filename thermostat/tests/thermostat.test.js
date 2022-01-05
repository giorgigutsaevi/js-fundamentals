
const Thermostat = require("../main/thermostat")

describe("Thermostat class", () => {
	it("creates an instance of itself", ()=>{
		test = new Thermostat();
		expect(test).toBeInstanceOf(Thermostat)
	})
})