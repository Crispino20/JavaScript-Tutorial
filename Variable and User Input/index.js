console.log("Hello World")

// A variable is a container for storing data 
// A variable behaves as if it was the value that it contains 

//2 Steps
//1. Declaration (var, let, const) 
//2. Assignment (= assignment operator)

let age = 21;
console.log(age);

let firstname = "Crispin";
let student = false;

console.log("Hello", firstname, "good morning");
console.log(student)

// changing the inner HTML of p tags
// document.getElementById("p1").innerHTML = "Hello " + firstname;
// document.getElementById("p2").innerHTML = "You are  " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

let x = 20
x = x % 7;
console.log("Remainder is " + x );


//Accepting user input 

//Easy way with a windows prompt 
// let username = window.prompt("What's your name?");
// console.log("Welcome",username)

//Difficult way with HTML textbox 
let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    //console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}

document.getElementById("myReset").onclick = function(){
    document.getElementById("myLabel").innerHTML = "Enter your name: "
}