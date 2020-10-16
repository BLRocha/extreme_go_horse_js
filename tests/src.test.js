/* eslint-disable no-undef */
require('../src/myMap');
require('../src/myEvery');
require('../src/mySome');
require('../src/myFilter');

const { expect } = require('chai');

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
});

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
});

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
});

describe("Suite test for myFilter >..", () => {
	const filtTets = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	it('filtTest.myFilter((a => a % 2 == 0)); Expected [2,4,6,8,10,12,14,16,18,20]', () => {
		expect(filtTets.myFilter(a => a % 2 == 0)).to.deep.equal([2,4,6,8,10,12,14,16,18,20]);
	});
	it('filtTest.myFilter(); Expected [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]', () => {
		expect(filtTets.myFilter()).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
	});
	it('filtTest.myFilter( a => a % 2 == 8 ); Expected []', () => {
		expect(filtTets.myFilter( a => a % 2 == 8 )).to.deep.equal([]);
	});
	it('filtTest.myFilter( a => a % 2 == "string" ); Expected [1,2,5,"teste", 47, "str"]', () => {
		expect(filtTets.myFilter( a => a % 2 == "8" )).to.deep.equal([]);
	});
	it('[1,2,5,"teste", 47, "str"].myFilter( a => a % 2 == "string" ); Expected ["teste","str"]', () => {
		expect([1,2,5,"teste", 47, "str"].myFilter( a => typeof a == "string" )).to.deep.equal(["teste","str"]);
	});
});
