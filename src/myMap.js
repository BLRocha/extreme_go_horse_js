/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
/**
 * MyMap simular map js
 */

/* eslint-disable-next-line no-multi-assign */
module.exports = Array.prototype.myMap = function(callback) {
	const nArr = [];
	if (this.length === 0) return [];
	if (typeof callback !== 'function')
		return function() {
			throw new TypeError(
				'MyMap(function(a,b,c) {}), callback required a function'
			);
		};
	for (let i = 0; i < this.length; i++) {
		const a = callback(this[i], i, this);
		if (a !== undefined) nArr[i] = a;
	}
	if (nArr.length === 0) return this;
	return nArr;
};
