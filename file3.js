var age  = 19
if ( age > 18 ){
    console.log('you are an adult');
}

/////////////////

var score = 45
if (score <= 50){
    console.log('you failed the test');
}

/////////////////
var name1 = 'john'
if (name1 = 'john'){
    console.log('hello john');
}

////////////////

var day = 'monday' 
if (day != 'saturday' && day != 'sunday'){
    console.log('its a weekend');
}

///////////////

var num = 4 
if (num % 2 == 0){
    console.log('the number is even');
}

//////////////

var character = 'a'
if (character.length === 1 && character.match(/[a-z]/i)){
    console.log('its a letter');
}

///////////////

var list = [1,2,3]
if (Array.isArray(list)){
    console.log('its an array');
}

///////////////

var num1 = 5 
if (num1 > 0){
    console.log('its a positive number');
}

///////////////

var num2 = -5 
if (num2 < 0){
    console.log('its a negative number');
}

///////////////

var num3 = 9 
if (num3 % 3 == 0){
    console.log('the number is multiple of 3');
}

///////////////

var num4 = 3.5 
if (num4 >= 3.0){
    console.log('congratulations you have a great GPA!');
}

///////////////

var pass = 'hskdhakj2k313'

if (pass.length >= 8){
    console.log('your password is strong');
}

///////////////

var age12 = 30 
if (age12 >= 18 && age12 <= 65){
    console.log('you are of working age');
}

///////////////

var color1 = 'red'
if (color1 == 'red' || color1 == 'blue' || color1 == 'green'){
    console.log('color is a primary color');
}

//////////////

function isNumber(x){
    if (!isNaN(x-1)){
        console.log('is a valid number');
    }
    else{
        console.log('its not a valid number');
    }
}
isNumber('2if')

//////////////