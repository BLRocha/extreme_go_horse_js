/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
/**
 * MyMap simular map js
 */

/* eslint-disable-next-line no-multi-assign */
module.exports = Array.prototype.myMap = function(callback) {
	const tmpArray = [];
	if (!this.length) return [];
	else if (typeof callback !== 'function')
		return function() {
			throw new TypeError(
				'MyMap(function(a,b,c) {}), callback required a function'
			);
		};
	for (let i = 0; i < this.length; i++) {
		const currentValue = callback(this[i], i, [...this]);
		if (currentValue !== undefined) tmpArray[i] = currentValue;
	}
	if (!tmpArray.length) return [...this];
	return tmpArray;
};
