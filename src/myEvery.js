/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
/**
 * MyEvery simular Array.every js
 */

/* eslint-disable-next-line no-multi-assign */
module.exports = Array.prototype.myEvery = function(callback) {
	if (!this.length) return callback(false, 0, this);
	for (let i = 0; i < this.length; i++) {
		let currentValue = callback(this[i], i, this);
		if (currentValue !== true) {
			return false;
		}
	}
	return true;
};
