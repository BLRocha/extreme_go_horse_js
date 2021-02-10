/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
/**
 * MySome simular Array.some js
 */

/* eslint-disable-next-line no-multi-assign */
module.exports = Array.prototype.mySome = function(callback) {
	if (!this.length) return false;
	for (let i = 0; i < this.length; i++) {
		let currentValue = callback(this[i], i, this);
		if (currentValue === true) {
			return true;
		}
	}
	return false;
};
