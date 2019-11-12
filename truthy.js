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
