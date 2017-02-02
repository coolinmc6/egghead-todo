import {partial, pipe} from './utils';

const add = (a,b) => a + b;
const addThree = (a, b, c) => a + b + c
const inc = (num) => num + 1;
const dbl = (num) => num * 2;

test('partial applies the first argument ahead of time', () => {
	const inc = partial(add, 1);
	const result = inc(2) // expects 3
	expect(result).toBe(3)
})

// he adds two more tests in lecture 13: Pass Data to Event Handlers with Partial Function Application


test('pipe passes the results of inc to dbl', () => {
	const pipeline = pipe(inc, dbl);
	const result = pipeline(2) // expects 3
	expect(result).toBe(6)
})