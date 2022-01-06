/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const ShoppingBasket = require("../main/basket");
const Candy = require("../main/candy");

describe("ShoppingBasket object", () =>{
	it("creates an instance of itself", ()=>{
		testBasket = new ShoppingBasket();
		expect(testBasket).toBeInstanceOf(ShoppingBasket)
	});


	it("has addItem() method", ()=>{
		const test = new ShoppingBasket();
		expect(typeof test.addItem).toBe("function")
	})

	it("addItem() adds the desired candy into the basket's array", ()=>{
		const test = new ShoppingBasket();
		let candyDouble = {name: () => "Skittles", price: 12}
		test.addItem(candyDouble)
		expect(test.basketArray.length).toEqual(1)
	})

	it("has getTotalPrice() method", ()=>{
		const test = new ShoppingBasket();
		expect(typeof test.getTotalPrice).toBe("function")
	})

	it("getTotalPrice() returns the total price of all candies in the basket", ()=>{
		const test = new ShoppingBasket();
		let candyDouble1 = { price: 12}
		let candyDouble2 = { price: 8}

		test.addItem(candyDouble1)
		test.addItem(candyDouble2)

		expect(test.getTotalPrice()).toEqual(20)
		expect(test.basketArray.length).toEqual(2)
	})

})