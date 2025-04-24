const Person = require('./Person');
const Professor = require('./Professor');
const Student = require('./Student');

const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles

const jose = new Professor('Jose', 'Math');

jose.introduceSelf();
jose.grade('My paper');

const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
console.log( summers.canStudyArchery() ); // true




