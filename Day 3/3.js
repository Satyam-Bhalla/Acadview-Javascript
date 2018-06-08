// Console.log statement is used for deugging purpose or for printing output to console
console.log("Hello World");

// Variable intro
//I am a comment don't worry about me
//variable usage
// Variable containing string
var a = "Satyam";
console.log(a);

//variable containing integer
a = 25;
console.log(a);

//same variable now contains floating point values
a = 3.56;
console.log(a);

//Variable containing array
a = [1,2,3];
console.log(a);


// Datatypes in javascript
// Variable containing string
var a = "Satyam";
console.log(typeof a);

//variable containing integer
a = 25;
console.log(typeof a);

//same variable now contains floating point values
a = 3.56;
console.log(typeof a);

//Variable containing array
a = [1,2,3];
console.log(typeof a);


// Basic statements in Javascript
// Find the area of circle

//Initializing the variables
var PI = 3.14;
var radius = 3;

//Calculating the values
var result = PI*radius*radius;

//Priniting the output
console.log(result);


//Initializing variables
var a = "We love ";
var b =  "Javascript";

//Printing the output
console.log(a+b);

//I am a single line comment

/*
	I am a multi line comment
	I can write anything here
	For increasing readability
*/

//Arithmetic operators
var a = 5;
var b = 3;

console.log(a+b); //Addition => Result: 8

console.log(a-b); //Subtraction => Result: 2

console.log(a*b); //Multiplication => Result: 15

console.log(a/b); //Division => Result: 1.666666667

console.log(a%b); //Modulus => 5/3 has remainder 2 => Result: 2

console.log(a++); //Post Increment

console.log(a); //Print changed value

console.log(++b); //Pre increment

console.log(--a); //Pre decrement

console.log(b--); //Post decrement

console.log(b); //Printing the changed value


//Assignment Operators

a = 5;
b = 2;

console.log(a += 1); // a = a+1;

console.log(a -= 1); // a = a-1;

console.log(b *= 2); // b = b*2;

console.log(b /= 2); // b = b/2;

console.log(a %= b); // a = a%b;

//Logical Operator

a = true;
b = false;

console.log(a && b); // a AND b

console.log(a || b); // a OR b

console.log(!a); 	 // Not a => not true => false


//Comparison operators
var a = 5;
var b = 3;

console.log(a>b); // a greater than b => Result: true

console.log(a<b); // a less than b => Result: false

console.log(a>=b);// a greater than or equal to b => Result: true

console.log(a<=b);// a less than or equal to b => Result: false

console.log(a!=b);// a is not equal to b => Result: true;

console.log(a!==b);// a is strictly not equal to b => Result: true


// == vs ===
a = 5;
b = '5';

console.log(a==b); // Whether a is equal to b

console.log(a===b);//Whether a is strictly equal to b

a=b; // assignment operator a now contains '5'

console.log(a===b); // whether a is strictly equal to b


//Bitwise operators
a = 5; //binary of a is 0101
b = 2; //binary of b is 0010

console.log(a&b); //Bitwise And
/*
	0101
	0010
   =0000 => 0
*/

console.log(a|b); //Bitwise or
/*
	0101
	0010
   =0111 => 7
*/

console.log(~a); //Bitwise Not
/*
	0101
   =1010 => -6 because in actual javascript numbers are 32 bit
   so ~5 becomes 11111111111111111111111111111010
   So this number becomes -6
*/

console.log(a^b); //Bitwise xor
/*
	0101
    0010
   =0111 => 7
*/

console.log(a>>1); // Right shift
/*
	0101
   =0010 => 2
*/


//Math object usage

console.log(Math.PI); //PI object

console.log(Math.round(5.698)); //Rounds the value

console.log(Math.floor(6.25));  //Return the lower value

console.log(Math.ceil(6.258));  //Return the higher value

console.log(Math.abs(-3.56));   //Return all the positive values

console.log(Math.pow(5,2));     //Return the power

console.log(Math.sqrt(5));      //Return the square root

console.log(Math.sin(90 * Math.PI/180)); //Return sine 90

console.log(Math.cos(0 * Math.PI/180));  //Return cosine 90

console.log(Math.tan(45 * Math.PI/180)); //Return tan 45

console.log(Math.min(3,6,9,8,5,2,1,4,7));//Gives the minimum value

console.log(Math.max(5,8,9,7,4,1,2,3));  //Gives the maximum value

console.log(Math.random());        //Return a random number between 0 and 0.9999

console.log((Math.random()*10)+1); // Return a random number between 1 and 10

console.log((Math.random()*100)+1);//Return a random number between 1 and 100

//To show the alert
alert("This page is cheking your location!!");

//To confirm the result
confirm("Do you want to show your location?");

//To get the input from user
var result = prompt("What is your name?");
console.log(result);