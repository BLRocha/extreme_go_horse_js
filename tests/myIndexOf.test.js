/* eslint-disable no-self-compare */
/* eslint-disable no-undef */
const { expect } = require('chai');

require('../src/myIndexOf');

describe('Suite test for myIndexOf >..', () => {
	it(`[45,8,7,5,6,8,5,12,48,46,13,25,17,89].myIndexOf(48)`, () => {
		expect(
			[45, 8, 7, 5, 6, 8, 5, 12, 48, 46, 13, 25, 17, 89].myIndexOf(46)
		).to.be.equal(9);
	});

	it(`[45,8,7,5,6,8,5,12,48,46,13,25,17,89].myIndexOf(10)`, () => {
		expect(
			[45, 8, 7, 5, 6, 8, 5, 12, 48, 46, 13, 25, 17, 89].myIndexOf(10)
		).to.be.equal(-1);
	});
	it(`[].myIndexOf(48)`, () => {
		expect([].myIndexOf(46)).to.be.equal(-1);
	});
});
