/* eslint-disable no-undef */
const { expect } = require('chai');

require('../src/mySome');

describe('Suite test for mySome >..', () => {
	it(`[1,2,5,4].mySome(a => a === 5); 5 in [1,2,5,4] expected true`, () => {
		expect([1, 2, 5, 4].mySome(a => a === 5)).to.deep.equal(true);
	});
	it(`[1,2,'5',4].mySome(a => a == 5); 5 in [1,2,'5',4] expexted true`, () => {
		// eslint-disable-next-line eqeqeq
		expect([1, 2, 5, 4].mySome(a => a == 5)).to.deep.equal(true);
	});
	it(`[1,2,'5',4].mySome(a => a === 5); 5 in [1,2,'5',4] expexted false`, () => {
		expect([1, 2, 5, 4].mySome(a => a === 5)).to.deep.equal(true);
	});
	it(`[1,2,'5',4].mySome(a => typeof a 'string'); 5 in [1,2,'5',4] expexted false`, () => {
		expect([1, 2, 5, 4].mySome(a => typeof a === 'string')).to.deep.equal(
			false
		);
	});
	it(`[1,2,'5',4].mySome(a => typeof a 'string'); 5 in [1,2,'5',4] expexted true`, () => {
		expect([1, 2, '5', 4].mySome(a => typeof a === 'string')).to.deep.equal(
			true
		);
	});
	it(`[].mySome(a => a); 5 in [] expexted false`, () => {
		expect([].mySome(a => typeof a === 'string')).to.deep.equal(false);
	});
});
