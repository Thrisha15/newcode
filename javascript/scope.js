// Global Scope
var globalVar = 'I am a global variable';

function exampleFunction() {
    // Local Scope
    var localVar = 'I am a local variable';
    console.log(globalVar);
    console.log(localVar); 
}

exampleFunction();

console.log(globalVar); 
console.log(localVar);  


// nested scope

var a=10;
function abc(){
    var b=5;
    console.log(a);
    console.log(b);
}
console.log(a)
abc()
console.log(b)



// Hoisting:-
    // It is the behaviour that happens at creation time of variables and function which appears to be moved to the top of the 
    // block.
    // It happens only for var & function declaration.

//  variables
// When you use var to declare a variable, the declaration is hoisted to the top of its scope, but the initialization (assignment of a value) remains in its original place.



console.log(myVar); // Output: undefined
var myVar = '10';
console.log(myVar); // Output: '10'

// functions

// Function declarations are fully hoisted, meaning both the function declaration and its body are moved to the top of the scope

greet(); // Output: 'Hello, world!'

function greet() {
    console.log('Hello, world!');
}

// lexical scope
// In JavaScript, lexical scope means that functions have access to variables from their own scope and any outer (enclosing) scopes based on their location in the code.


// Function as a Scope:-

// Variables declared inside a function are local to that function and cannot be accessed from outside.

//  Immediately Invoked Function Expression (IIFE)

(function() {
    // Code here runs immediately
    var privateVar = 'I am private';
    console.log(privateVar); // Accessible here
})();

// Block as a Scope:-
// The block is a code that is enclosed with in curly braces with exception of object.

function simpleLoop(){
    for(let i = 5; i < 5; i++){
        console.log(i);
    }
    console.log(i);
}     //output:ReferenceError: i is not defined


{
    var a = 7;
    console.log(a);
}

    // Above is fake.

// Let Scope/const Scope:- 
    // Let is the keyword that helps us create variables.

   {
        let a = 7;
        console.log(a);
    }

    // tasks

    var a = 8;

    printA(a);

    var printA = function(a){
        console.log(a);
    }

    // Hoisted code
var a; // Declaration is hoisted
var printA; // Declaration is hoisted, but not the function assignment

a = 8; // This assignment happens at its original place in the code

printA(a); // At this point, `printA` is undefined, so calling it results in an error

printA = function(a) {
    console.log(a);
}; // Function assignment happens at its original place


// hoisting in IIFE

var favFruit = "Apple"; // Global scope

function eatAndSay() {
    var favFruit = "Banana"; // Local scope, shadows global favFruit
    console.log("Local favFruit:", favFruit); // Logs: Banana
}

eatAndSay();
console.log("Global favFruit:", favFruit); // Logs: Apple
