
module.exports = Array.prototype.myFilter = function(filter) {
    if (typeof filter == 'function') {
        const arr = [];
        let acc = 0;
        this.forEach((condicao) => {
            if (filter(condicao)) {
                arr[acc++] = condicao
            }
        });
        return arr;
    } return this;
}
