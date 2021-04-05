module.exports = Array.prototype.myIndexOf = function(inArr) {
    if (this.length === 0) {
        return -1;
    }
    for(let i = 0; i < this.length; i++) {
        if (inArr === this[i]) {
            return i
        }
    }
    return -1
}
