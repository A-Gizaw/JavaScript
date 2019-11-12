
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

/********    ANONYMOUS FUNCTIONS    ********/

/*
If a function is not going to be used many times then an ANONYMOUS function would be prefreble.
  This takes up less memory as it may not be excecuted / assigned a location in memory

It's common practice is to assign it to a CONST variable , however you can use any.
*/

const shout =  function(){
  return 'I\'M GOING TO BE THE KING OF THE PIRATES'
}

//Do not forget paramenter when callin the anonymous function
console.log(shout); //prints out the function refrence
console.log(shout()); //Runs the actual function

var dreams = function(name){
  let dream
  switch(name){
    case 'luffy': dream = 'I\'M GOING TO BE THE KING OF THE PIRATES!!!'
                break;
    case 'zoro': dream = 'I\'m going to be the worlds greates swordsman'
                break;
    case 'sanji': dream ='I\'m going to find the all blue'
                break;
    default:dream = 'Find the one piece'
            break;
  }
  return dream
}

console.log(dreams());
console.log(dreams('luffy'));
console.log(dreams('zoro'));
console.log(dreams('sanji'));
