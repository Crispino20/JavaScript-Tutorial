//Type conversion = change the datatype of a value to another (strings, numbers, booleans)

//let age = window.prompt("How old are you?") //30
//console.log(typeof age); //typeof fucntion enables you to see what kind of datatype a variable is
//age += 1;

//You need to cast "age" as a Number type from a String type 
// age = Number(age);
// age += 1;
//console.log(typeof age);
//console.log("Happy birthday! You are ", age, " years old!" ) //output = 301

//Some more conversions and their types 

// let x;
// let y;
// let z;

// x = Number("3.14");
// console.log(x, typeof x);

// y = String(3.14);
// console.log(y, typeof y);

// z = Boolean(""); //results in false when empty and true when populated
// console.log(z, typeof z);


//CONST 

//Const = a variable that cannot be changed, even if it is assigned a different value elsewhere
//Used in place of var or let 
//A good practice is to make const variables UPPER CASE

// const PI = 3.14 
// let radius;
// let circumference;

// PI = 500; //This is discounted, as the first assignment takes precedence. 
//You will also get a "Uncaught TypeError: Assignment to constant variable" error message
//If declaration was in let however, this value would have been selected
//radius = window.prompt("Enter the radius of a circle");
//radius = Number(radius);
//circumference = 2 * PI * radius;

//console.log("The circumference is ", circumference);


//MATH

let myNum1 = 3.14;
let myNum2 = 5;
let myNum3 = 9;
let maximum;
let minimm;

console.log("Round is ", Math.round(myNum1));

//floor function always rounds a number down 
console.log("Floor is ", Math.floor(myNum1));

//Ceiling function rounds up
console.log("Ceiling is ", Math.ceil(myNum1));

//Power gives the power of a number 
console.log("Power is ", Math.pow(myNum1,2));

//Square root 
console.log("Square root is ", Math.sqrt(myNum1));

//Absolute value - distance away from 0
console.log("Absolute is ", Math.abs(myNum1));

//Find the max value 
maximum = Math.max(myNum1,myNum2,myNum3);
console.log(maximum)

//Find the min value 
minimm = Math.min(myNum1,myNum2,myNum3);
console.log(minimm)