/*
Var uses for integer
*/

//Declaration of var variable
var x = 10
console.log(x);

//Reassigning value
x= 20;
console.log(x);

//Manipulating value
x+=5; //25
console.log(x);

x-=10 //15
console.log(x);

//Multiple variables interactions
var y,z;
y=2
z= x*y //30
console.log(z);

x=z/x //2
console.log(x);


/*
var uses for String
  Can be single or double quotes
*/

var s ="Hello World"
console.log(s);

//concatination
s+=', I AM ALIVE'
console.log(s);

//Use different quotes to add quotes in sting
s = '"Thats" - she'
console.log(s);
//OR
// use backslash to escape quotes
s = "Can I escape \"yes\", YAY!"
console.log(s);
s = 'What about me \'you can too\', DOUBLE YAY!'
console.log(s)
s = "Can i be in the string too \\, TRIPPLE YAY!" //output backslash
console.log(s);

//length of a string
s = "I AM 12 LONG"
console.log(s.length);

//New line
s = "I am line 1\nI am line 2"
console.log(s)