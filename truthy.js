/*
non-boolean types can be used to evaluate a condition. This simply cheks if
something exists within the variable

These values are called truthy

Falsy values are ones that equate to false, these include :
    0
    '' OR ""
    null
    undefined
    NaN -> Not A Number
*/

//Falsy example
let wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');//This will print
}

//Truthy example
let favoritePhrase = 'Hello World!';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");//This will print
} else {
  console.log('This string is definitely empty.');
}

/********        Short-circuit evauation      ********/

/*
This can be used for quick assignment, however does not check the actual value
*/

var username //null
let defaultName = username || "Stranger" //falsy -> assign 'Stranger' to defaultName
console.log(defaultName);

username = "Mr Logiks"
defaultName = username || "Stranger" //truthy -> addign username to defaultName
console.log(defaultName);

/********        Ternary operations      ********/

/*
Ternary operations are a short hand way of writing if statements
Syntax:
    CONDITION ? TRUE BLOCK : FALSE BLOCK ;
*/

let truthy = "I will be truthy"
let falsy

truthy ? console.log('true block'): console.log('false/else block'); //prints 'true block'
falsy ? console.log('true block'): console.log('false/else block'); //prints 'false/else block'

let check = 'CHECK ME!';

(check === 'CHECK ME!') ? console.log('Checked'): console.log('wat'); //print 'Checked'
