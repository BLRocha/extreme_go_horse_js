/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
/**
 * MyEvery simular Array.every js
 */

/* eslint-disable-next-line no-multi-assign */
module.exports = Array.prototype.myEvery = function(callback) {
	if (this.length === 0) return false;
	for (let i = 0; i < this.length; i++) {
		let a = callback(this[i], i, this);
		if (a !== true) {
			return false;
		}
	}
	return true;
};
