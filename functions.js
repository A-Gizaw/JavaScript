
/*
All function are defined by having the key word 'function' before the function name.

Return types are not required.

Parameters can have default values defines in the function paramenter.
If a different value is passed with the calling of the function then the passed value is used
*/

function kaizoku(pirateGroupname='Straw Hat',captain = 'Monkey D. luffy',firstMate='Roronoa Zoro'){
  console.log(`My name is ${captain} and I'm the captain of the ${pirateGroupname}.
  My first mate is ${firstMate} `);
}

kaizoku() //Strawhat pirates
kaizoku('Heart','Trafalgar D. Water Law','Bepo') //Heart pirates

/********    RETURN    ********/

/*
Although function do not require a return type, they ale=ways return something.
If a return is not specified the function returns 'undefined'
return can be specified using 'return'
*/

function isCaptainOfStrawHats(name){
  if(name ==='Luffy') {
    return `${name} SENCHO !!!!`
  }else{
    return `Anata wa sencho janai...kuso yaro`
  }
}

console.log(isCaptainOfStrawHats('Luffy'));//prints 'Luffy SENCHO !!!!''
console.log(isCaptainOfStrawHats('Usopp'));//prints 'Anata wa sencho janai...kuso yaro'
