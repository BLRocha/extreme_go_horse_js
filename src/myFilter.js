
module.exports = Array.prototype.myFilter = function(filter) {
    if (typeof filter == 'function') {
        const newArray = [];
        let acc = 0;
        this.forEach((condicao) => {
            if (filter(condicao)) {
                newArray[acc++] = condicao
            }
        });
        return newArray;
    } return this;
}
