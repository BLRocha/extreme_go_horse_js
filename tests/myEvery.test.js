/* eslint-disable no-self-compare */
/* eslint-disable no-undef */
const { expect } = require('chai');

require('../src/myEvery');

describe('Suite test for myEvery >..', () => {
	it(`[1,2,5,4].myEvery(a => typeof a === 'number') expexted typeof a === 'number' Equal an true`, () => {
		expect([1, 2, 5, 45].myEvery(a => typeof a === 'number')).to.be.equal(true);
	});
	it(`[1,2,5,'4'].myEvery(a => typeof a === 'number') expexted typeof a === 'number' Equal an false`, () => {
		expect([1, 2, 5, '4'].myEvery(a => typeof a === 'number')).to.be.equal(
			false
		);
	});
	it(`[[], [], []].myEvery(a => myEvery(a => Array.isArray(a)) expexted typeof a === 'number' Equal an false`, () => {
		expect([[], [], []].myEvery(a => Array.isArray(a))).to.be.equal(true);
	});
	it(`[[], [], []].myEvery(a => myEvery(a => typeof a == 'object')) expexted typeof a === 'number' Equal an false`, () => {
		expect([[], [], []].myEvery(a => typeof a === 'object')).to.be.equal(true);
	});
	it(`[].myEvery(a => typeof a === 'number') expexted typeof a === 'number' Equal an false`, () => {
		expect([].myEvery(a => typeof a === 'number')).to.be.equal(false);
	});
	it(`[].myEvery(a => a == a) expexted a == a Equal an true`, () => {
		// eslint-disable-next-line eqeqeq
		expect([].myEvery(a => a == a)).to.be.equal(true);
	});
});
