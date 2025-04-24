const Person = require('./Person');
const Professor = require('./Professor');

const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles

const jose = new Professor('Jose', 'Math');

jose.introduceSelf();

