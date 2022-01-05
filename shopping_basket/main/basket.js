
const Candy = require("../main/candy")

class ShoppingBasket{

	constructor(){
		this.basketArray  = []
	}

	addItem(candy){
		this.basketArray.push(candy)
	}

	getTotalPrice(){
		return this.basketArray.map(candy => candy.price).reduce((el, acc) => el + acc, 0)
	}

}

module.exports = ShoppingBasket;