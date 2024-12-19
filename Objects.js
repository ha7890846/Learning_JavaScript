const Person = {
    salary: 0,
    name: "John",
    age: 30,
    _age1 :100,
    _occupation: "Developer", // Initialize the private variable
    userDetails: function(){
        console.log(`${this.name} is ${this.age} years old and works as a ${this.occupation}`);
    },
    get value(){
        return 1000;
    },
   
    set occupation(str){
        if (typeof str === 'string') {
            this._occupation = str;
        } else {
            throw new Error('Occupation must be a string');
        }
    },
    get occupation() {
        return this._occupation; // Correctly return the private variable
    }
}

// Accessing the object prop using .dot notation
console.log(Person.name);
// Accessing prop using [] literals notation
console.log(Person['name']);
console.log(Person.age);
console.log(Person.occupation);
console.log(Person._occupation);
Person.userDetails();
console.log(Person.value);
Person.occupation = "Junior Developer";
console.log(Person.occupation);
console.log(Person._age1);