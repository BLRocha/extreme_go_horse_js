/* eslint-disable no-undef */
require('../src/myFilter');

const { expect } = require('chai');

describe(`Suite test for myFilter >..`, () => {
	const filtTets = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
	];
	it('filtTest.myFilter((a => a % 2 == 0)); Expected [2,4,6,8,10,12,14,16,18,20]', () => {
		expect(filtTets.myFilter(a => a % 2 === 0)).to.deep.equal([
			2,
			4,
			6,
			8,
			10,
			12,
			14,
			16,
			18,
			20,
		]);
	});
	it('filtTest.myFilter(); Expected [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]', () => {
		expect(filtTets.myFilter()).to.deep.equal([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
		]);
	});
	it('filtTest.myFilter( a => a % 2 == 8 ); Expected []', () => {
		expect(filtTets.myFilter(a => a % 2 === 8)).to.deep.equal([]);
	});
	it('filtTest.myFilter( a => a % 2 == "string" ); Expected [1,2,5,"teste", 47, "str"]', () => {
		expect(filtTets.myFilter(a => a % 2 === '8')).to.deep.equal([]);
	});
	it('[1,2,5,"teste", 47, "str"].myFilter( a => a % 2 == "string" ); Expected ["teste","str"]', () => {
		expect(
			[1, 2, 5, 'teste', 47, 'str'].myFilter(a => typeof a === 'string')
		).to.deep.equal(['teste', 'str']);
	});
});
