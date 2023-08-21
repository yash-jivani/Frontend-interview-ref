/* 
asked in cars24

implement this code:
const ans = calc.add(5).multipy(3).subtract(2).add(10)
console.log(ans.total)

*/ 

const calc = {
    total: 0,
    add: function (num) {
        this.total = this.total + num;
        return this;
    },
    multipy: function (num) {
        this.total = this.total * num;
        return this;
    },
    subtract: function (num) {
        this.total = this.total - num;
        return this;
    },
};

const ans = calc.add(5).multipy(3).subtract(2).add(10);
console.log(ans.total);
