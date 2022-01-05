class User{

	constructor(firstName){
		this.firstName = firstName
	}

	getName(){
		return this.firstName;
	}

	getIntroduction(){
		return `Hi, my name is ${this.firstName}`
	}

}

module.exports = User;