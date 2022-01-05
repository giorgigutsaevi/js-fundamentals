
const UserBase = require("../main/userBase")
const User = require("../main/user")

describe("UserBase class", () => {
	it("creates an instance of itself", () => {
		const test = new UserBase([
			new User('Uma'),
			new User('Josh'),
			new User('Ollie')
		]);
		expect(test).toBeInstanceOf(UserBase);
	});

	it("UserBase has the count() method", () =>{
		const test2 = new UserBase([new User("Gio")])
		expect(typeof test2.count).toBe("function");
	});

	it("count() method returns the size of the users array", () =>{
		const test2 = new UserBase([new User("Gio"), new User("Tina")])
		expect(test2.count()).toEqual(2);
	})

	it("UserBase has the getNames() method", ()=>{
		const test2 = new UserBase([new User("Gio")]);
		expect(typeof test2.getNames).toBe("function")
	});

	it("getNames() returns the names of all users in an array ", ()=>{
		const test = new UserBase([
			new User('Uma'),
			new User('Josh'),
			new User('Ollie')
		]);
		expect(test.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ])
	});

	it("UserBase has the getIntroductions() method", ()=>{
		const test2 = new UserBase([new User("Gio"), new User("Tina")]);
		expect(typeof test2.getIntroductions).toBe("function")
	});

	it("getIntroductions() returns the welcome greetings based on user's names in an array ", ()=>{
		const test = new UserBase([
			new User('Uma'),
			new User('Josh'),
		]);
		expect(test.getIntroductions()).toEqual([ 'Hi, my name is Uma', 'Hi, my name is Josh'])
	});

})

