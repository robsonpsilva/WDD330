const Person = require('./Person');

class Student extends Person {
    #year;
  
    constructor(name, year) {
      super(name);
      this.#year = year;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
    }
  }
  module.exports = Student;