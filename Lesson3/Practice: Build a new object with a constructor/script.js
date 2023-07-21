function Person(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.getFullName = function() {
        return `${this.firstName} ${this.middleName} ${this.lastName} `;
    };
}
const person = new Person("Khalil", "middleName", "Warner");
console.log(person.getFullName());