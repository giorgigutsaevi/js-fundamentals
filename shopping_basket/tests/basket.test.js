
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
		test.addItem(new Candy('Skittles', 12))
		test.addItem(new Candy('M&Ms', 7))
		expect(test.basketArray.length).toEqual(2)
	})

	it("has getTotalPrice() method", ()=>{
		const test = new ShoppingBasket();
		expect(typeof test.getTotalPrice).toBe("function")
	})

	it("getTotalPrice() returns the total price of all candies in the basket", ()=>{
		const test = new ShoppingBasket();
		test.addItem(new Candy('Skittles', 12))
		test.addItem(new Candy('M&Ms', 7))
		expect(test.getTotalPrice()).toEqual(19)
		expect(test.basketArray.length).toEqual(2)
	})

})