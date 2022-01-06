/* eslint-disable no-undef */
const Candy = require("../main/candy")

describe("Candy object", () => {
	it("creates an instance of itself", ()=>{
		const testCandy = new Candy('Maltesers', 3.99);
		expect(testCandy).toBeInstanceOf(Candy)
	});

	it("has getName() method", ()=>{
		const testCandy = new Candy('Maltesers', 3.99);
		expect(typeof testCandy.getName).toBe("function")
	});

	it("getName() returns the candy's name", ()=>{
		const maltesers = new Candy('Maltesers', 3.99);
		expect(maltesers.getName()).toBe("Maltesers")
	});

	it("has getPrice() method", ()=>{
		const kitkat = new Candy('Kitkat', 2.99);
		expect(typeof kitkat.getPrice).toBe("function")
	})

	it("getPrice() returns the candy's price", ()=>{
		const kitkat = new Candy('Kitkat', 2.99);
		expect(kitkat.getPrice()).toBe(2.99)
	})

})

