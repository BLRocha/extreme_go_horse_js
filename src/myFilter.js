module.exports = Array.prototype.myFilter = function(filter) {
	if (typeof filter === 'function') {
		const newArray = [];
		let acc = 0;
		this.forEach(condition => {
			if (filter(condition)) {
				newArray[acc++] = condition;
			}
		});
		return newArray;
	}
	return [...this];
};
