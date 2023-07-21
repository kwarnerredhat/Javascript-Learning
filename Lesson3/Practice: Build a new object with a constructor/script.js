function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastNAme = lastName;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}
const person = new Person("Khalil, Warner");
console.log(person.getFullName());