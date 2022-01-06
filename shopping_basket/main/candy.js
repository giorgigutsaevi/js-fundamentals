/* eslint-disable no-undef */

class Candy{
	constructor(candyName, price){
		this.candyName = candyName;
		this.price = price;
	}

	getName(){
		return this.candyName
	}

	getPrice(){
		return this.price
	}

}

// let myCandy1 = new Candy('Maltesers', 1.99);
// console.log(myCandy1.getName());
// console.log(myCandy1.getPrice());

module.exports = Candy;