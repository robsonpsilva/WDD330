const Person = require('./Person');
const Professor = require('./Professor');
const Student = require('./Student');

const Calculator = require('./calculator');

const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles

const jose = new Professor('Jose', 'Math');

jose.introduceSelf();
jose.grade('My paper');

const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
console.log( summers.canStudyArchery() ); // true

const calculator = new Calculator(2,3);
console.log(calculator.sum(10,20));
console.log(calculator.mul(15,5));
console.log(calculator.sub(2,3));
console.log(calculator.div(12,3));



