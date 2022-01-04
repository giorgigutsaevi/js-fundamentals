const fizzBuzz = require('../main/fizzbuzz')

describe('fizzBuzz', () =>{
	it('returns Fizz for multiples of 3', () =>{
		expect(fizzBuzz(3)).toBe ('Fizz')
	});
	it('returns FizzBuzz for multiples of 5 & 3', ()=>{
		expect(fizzBuzz(15)).toBe ('FizzBuzz')
	});
	it('returns Buzz for multiples of 5', ()=>{
		expect(fizzBuzz(5)).toBe ("Buzz")
	});
	it('returns any number that does not satisfy the above', ()=>{
		expect(fizzBuzz(4)).toBe (4)
	});

});