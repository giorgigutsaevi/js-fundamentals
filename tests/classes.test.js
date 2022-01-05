const User = require("../main/classes");

describe('class User', () => {
  it("creates an instance of itself", () => {
		const gio = new User("Gio");
		expect(gio.firstName).toBe('Gio');
  });

	it("it has a getUser() method", () => {
		const user = new User("Tina");
		expect(typeof user.getName).toBe("function");
  });

  test("getName() returns the firstName", () => {
		const batman = new User("Batman")
    expect(batman.getName()).toEqual("Batman");
  });

	it("it has a getIntroduction() method", () => {
		const user = new User("defaultUser");
		expect(typeof user.getIntroduction).toBe("function");
  });

	test("getIntroduction() returns a welcome message", ()=>{
		const user = new User("Uma");
		expect(user.getIntroduction()).toEqual('Hi, my name is Uma')

	})
});
