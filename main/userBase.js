
const User = require("../main/user");

class UserBase{
	
	constructor(usersArray){
		this.usersArray = usersArray
	}

	count(){
		return this.usersArray.length
	}

	getNames(){
		return this.usersArray.map(user => user.firstName)
	}

	getIntroductions(){
		return this.usersArray.map(user => {
			return `Hi, my name is ${user.firstName}`
		})
	}


}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];



test = new UserBase(users)
console.log(test.	getIntroductions());



module.exports = UserBase;