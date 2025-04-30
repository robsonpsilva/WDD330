class Calculator{
    constructor (op1, op2){
        this.op1 = op1;
        this.op2 = op2;
    }
    sum(op1, op2){
        return op1 + op2;
    }
    mul(op1,op2){
        return op1 * op2;
    }
    sub(op1,op2){
        return op1-op2;
    }
    div(op1,op2){
        return op1/op2;
    }
}

module.exports = Calculator;