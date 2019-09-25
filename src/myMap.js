/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
/**
 *
 * MyMap simular map js
 */

/* eslint-disable-next-line no-multi-assign */
module.exports = Array.prototype.myMap = function(callback) {
	const arr = [...this];
	const nArr = [];
	if (this.length === 0) return [...this];
	if (typeof callback !== 'function')
		return new TypeError(
			'MyMap(function(a,b,c) {}), callback required a function'
		);
	for (let i = 0; i < this.length; i++) {
		const a = callback(arr[i], i, this);
		if (a === undefined) {
			return arr;
		}
		nArr[i] = a;
	}
	return nArr;
};
