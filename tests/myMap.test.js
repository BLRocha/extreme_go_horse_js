/* eslint-disable no-undef */
const { expect } = require('chai');

require('../src/myMap');

describe('Suite test for myMap >..', () => {
	it(`[1,2,5,4].map(a => 5) expexted deep equal [6,8,10,9]`, () => {
		expect([1, 2, 5, 4].map(a => a + 5)).to.deep.equal([6, 7, 10, 9]);
	});

	it(`[1,2,5,4].myMap(a => 5) expexted deep equal [6,8,10,9]`, () => {
		expect([1, 2, 5, 4].myMap(a => a + 5)).to.deep.equal([6, 7, 10, 9]);
	});

	it('[1,2,5,4].myMap(a => {a + 5}) expexted deep equal [1,2,5,4]', () => {
		expect(
			[1, 2, 5, 4].myMap(a => {
				// eslint-disable-next-line no-unused-expressions
				a + 5;
			})
		).to.deep.equal([1, 2, 5, 4]);
	});

	it('[].myMap(a => 5) expexted deep equal [empty]', () => {
		expect(
			[].myMap(a => {
				// eslint-disable-next-line no-unused-expressions
				a + 5;
			})
		).to.deep.equal([]);
	});
	it('[].myMap() expexted deep equal [empty]', () => {
		expect([1, 2, 3, 5].myMap()).to.throw(
			TypeError,
			'MyMap(function(a,b,c) {}), callback required a function'
		);
	});
});
