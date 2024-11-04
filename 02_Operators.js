let a = 100;
let b = 10;

console.log(
  "\n********************* Arithmatic Operations *************************"
);
// Addtion
let sum = a + b;

// Subs
let diff = a - b;

// Multiplication..
let Multiply = a * b;

// Division..
let divi = a / b;

// exponential
let expo = 2 ** 3; // cube of 2

// Remainder or Modulus
let mod = 100 % 10;
console.log("The value of a and B are: " +a +" & " +b);
console.log("Addition: " + sum);
console.log("Substraction: " + diff);
console.log("Multiplication: " + Multiply);
console.log("Division: " + divi);
console.log("Exponent : " + expo);
console.log("Modulus : " + mod);
a++;
b--;
console.log("increment of a++: "+ a);
console.log("decrement of b--: "+ b);


console.log(
  "\n********************* Comparison Operators *************************"
);
a = 100;
b = "100";
console.log("Here is the Value, a = " + a +" b = " + b);
console.log("a and b are not equal: " + (a != b)); // Not Equal check
console.log("a and b are equal: " + (a == b)); // Check Equality...
console.log("a and b are Strict Equal: " + (a === b)); // Strict Equal check..
console.log("a and b are NOt Strict Equal: " + (a !== b)); // Strict NOT Equal check..
console.log("a is less or equal to  b: " + (a <= b)); // less than or equal
console.log("a is greater or equal to b: " + (a >= b)); // greater than or equal...
console.log("a is greater than b: " + (a > b)); // greater than
console.log("a is less than b: " + (a < b)); // less than



console.log(
  "\n********************* Logical Operator *************************"
);
// Logical AND (&)
console.table({"true && True":(true && true)});
console.table({"false && false":(false && false)});
console.table({"true && false":(true && false)});
// Logical OR (||)
console.table({"true || True":(true || true)});
console.table({"false || false":(false || false)});
console.table({"true || false":(true || false)});
// Logical NOT (!)
console.table({"!true":(!true)});
console.table({"!false":(!false)});

