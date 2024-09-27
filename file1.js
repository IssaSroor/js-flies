////////////////////////////data types and operators
var cash = 1000;
var liabilities = 500;
var flow_ratio = cash/liabilities;
console.log(flow_ratio);
////////////////////////////
var revenues = 1000;
var expenses = 500;
var netIncome = revenues-expenses;
console.log(netIncome);
////////////////////////////
var liabilities2 = 1000;
var equity = 500;
var totalAssets = liabilities2+equity;
console.log(totalAssets);
////////////////////////////
var profit = 1000;
var sales = 500;
var netIncome2 = profit*sales;
console.log(netIncome2);
////////////////////////////
var numbers = [7,9,2];
var sum = 0;
for(let i = 0; i<numbers.length;i++){
    sum = sum + numbers[i];
}
var avrage = sum / numbers.length
console.log(avrage);
////////////////////////////
var price = 150;
var discount = 0.30;
var disAmount = price*discount;
var finalPrice = price - disAmount;
console.log(finalPrice);
////////////////////////////
var age = 20;

if (age >= 18 && age <=30){
    console.log("true")  
}
else {
    console.log("false")  
}
///////////////////////////
console.log(1**2);
console.log(2**3);
///////////////////////////
console.log(1%10);
console.log(2%4);
///////////////////////////
console.log(typeof(100));
///////////////////////////
console.log(typeof(73.9));
///////////////////////////
console.log(typeof(NaN));
///////////////////////////
console.log(typeof("water"));
///////////////////////////
console.log(typeof(false));
///////////////////////////
console.log(typeof(9 != 11));
///////////////////////////
console.log("Orang" + "e");
///////////////////////////
console.log("Orange" - "s");
///////////////////////////
console.log("4" + "8");
///////////////////////////
console.log("4" - "8");
///////////////////////////
console.log("name" + 3);
///////////////////////////
console.log("name" - 3);
///////////////////////////
console.log(82 + "word");
///////////////////////////
console.log(1 + "hello");
///////////////////////////
console.log("hello" + 1);
///////////////////////////
console.log(1 + true);
///////////////////////////
console.log(typeof(Infinity));
///////////////////////////
console.log(1== '1');
///////////////////////////
console.log(1==='1');
///////////////////////////Strings
var text = "Welcome to Orange";
console.log(text.toUpperCase())
///////////////////////////
console.log(text.slice(8,10).toUpperCase())
///////////////////////////
console.log(text.replace("Welcome to","Hello from"))
///////////////////////////
console.log(text.length)
///////////////////////////
console.log(text.replace("Orange",'"Orange"'))
///////////////////////////
console.log(text.replace('Orange' , 'Orange Jordan'))
///////////////////////////
var text2 = "cactus";
var firstLetter = text2.slice(0,1);
newText = text2.slice(1).replace('c' , '*');
console.log(firstLetter + newText);
///////////////////////////Arrays
var arr = ["Coding","Academy","By","Orange"]
arr.push("Jordan")
console.log(arr)
///////////////////////////
arr.splice(2)
console.log(arr)
//////////////////////////
arr.splice(0,2,"Welcome","To","Coding","Academy","By","Orange")
console.log(arr)
//////////////////////////
arr.splice(0,3)
console.log(arr)
//////////////////////////
console.log(arr.join(" "))
/////////////////////////
arr.splice(0,0,"Coding")
console.log(arr)
////////////////////////
arr.splice(1,2)
console.log(arr)
///////////////////////
var fruit = ["banana","apple","orange","watermelon"];
var vegetables = ["carrot","tomato","pepper","lettuce"];
console.log(vegetables.pop());
console.log(fruit.splice(0,1));
console.log(fruit.indexOf("orange"));
console.log(fruit.push(1));
console.log(vegetables.length);
console.log(vegetables.push(3));
var food = fruit.concat(vegetables);
console.log(food)
console.log(food.splice(4,2))
console.log(food.reverse())
console.log(food.toString())
//////////////////////
function wordToArray(str){
    console.log(str.split(" "))
}
wordToArray("orange academy")
//////////////////////
    function hideNumber(){
    var phone = "0776807777";
   var hidden = phone.slice(0,7).replace(/[0-9]/g,'*')
   var visible = phone.slice(7)
   var final = hidden + visible
    console.log(final)
    }
    hideNumber()
//////////////////////
function hideEmail(){
    var email = "orange_academy@orange.jo";
   var hidden = email.replace("_academy",'...')
    console.log(hidden)
    }
    hideEmail()
//////////////////////
function firstUpper(){
    var tester = "coding academy is nar"
    var result = tester.charAt(0).toUpperCase() + tester.slice(1);
    console.log(result)
}
firstUpper()
//////////////////////
function upperEach(){
    var tester2 = "coding academy is nar"
    var result2 =tester2.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1));
    console.log(result2.join(' '));
}
upperEach()
//////////////////////
function flipNumbers(){
    var orgNums = 92485;
    var reversed = orgNums.toString().split('').reverse().join('')
    console.log(orgNums.toString().split('')) 
    console.log(reversed)
}
flipNumbers()
//////////////////////
function swap1(){
    var a = 3
    var b = 4
    var c = a
    a = b
    b = c
    console.log(a,b)
}
swap1()
function swap2(){
    var a = 3
    var b = 4
    a = a + b
    b = a - b
    a = a - b
    console.log(a,b)
}
swap2()
function swap3(){
    var a = 3
    var b = 4
    b = b - a
    a = a + b
    b = a - b
    console.log(a,b)
}
swap3()
//////////////////////
function removeIndex(index){
    var text3 = "orange"
    console.log (text3.slice(0,index) + text3.slice(index + 1))
}
removeIndex(3)
//////////////////////
function mergeWithoutFirst(str1,str2){
    console.log(str1.slice(1) + str2.slice(1))
}
mergeWithoutFirst("lora","inge")
//////////////////////
function ensure(char,str3){
    if (str3.charAt(0) == char || str3.charAt(str3.length - 1) == char){
        console.log (true)
    }
    else { 
        console.log (false)
    }
}
ensure('o',"orange")
//////////////////////
wordToArray("coding academy by orange")
//////////////////////
function reorder(str5){
console.log(str5.split('').sort().join(''))
}
reorder("orange")
//////////////////////
var arr2 = [1,2,3]
var arr3 = [4,5,6]
var arr5 = [];
arr5 = arr2;
arr2 = arr3;
arr3 = arr5;
console.log(arr2)
console.log(arr3)
//////////////////////Conditions
var age = 22;
if (age > 30)
    console.log("you are not eligible")
else if (age >= 18 || age <= 30)
    console.log("you are eligible")
else if (age < 18)
    console.log("you may join the kids")
else if (age > 60)
    console.log("you may join the seniors")

function calculateAge(){
    var yearOfBirth = 2002
    var age = 2024 - yearOfBirth
    console.log("your age is: " , age)
}
calculateAge()

function switchTheLetters(input) {
    var output = "";
    for (var i=0; i<input.length; i++) {
        if (input[i] == input[i].toUpperCase()) {
            output += input[i].toLowerCase();
        } else {
            output += input[i].toUpperCase();
        }
    }
    return output;
}

var input = "OrAnGe";
var outputResult = switchTheLetters(input);
console.log(outputResult);

function camelCase(){
    var tester2 = "coding academy is nar"
    var result2 =tester2.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1));
    console.log(result2.join(''));
}
camelCase()

function removeSpecific(arr6,str7){
    arr6.splice(2,1)
    console.log(arr6)
}
var arr6 = ["coding","academy","by","orange"]
removeSpecific(arr6,"by")

// function checkEven(){
//     var x = prompt("even/odd")
//     if (x % 2 == 0)
//         console.log("even")
//     else
//     console.log("odd")
// }
// checkEven()

// function checkNum(){
//     var x = prompt("number?")
//     if ((x - 1) != NaN)
//         console.log("number")
//     else
//         console.log("not number")
// }
// checkNum()

// function checkLargest(){
//     var x = prompt("number")
//     var y = prompt("number")
//     if (x > y)
//         console.log(x);
//     else 
//         console.log(y);
// }
// checkLargest()

// function checkTriangle(){
//     var x = prompt("side1")
//     var y = prompt("side2")
//     var z = prompt("base")
//     if (x == y && x == z && y == z)
//         console.log("equilateral");
//     else if (x == y && x != z && y != z)
//         console.log("isosceles");
//     else if (x != y && x != z && y != z)
//         console.log("scalene");
// }
// checkTriangle()

// function findNum(){
//     var c = 2
//     var arr7 = [1,2,3,4]
//     for (let i = 0; i < arr7.length; i++){
//         if (arr7[i]==c){
//             console.log("present in array")
//             break;
//         }
//         else
//             console.log("not there");
//     }
// }
// findNum()

// function checkLeap(){
//     var x = prompt("year")
//     if (x % 4 == 0)
//         console.log("Leap Year")
//     else
//     console.log("Not Leap Year")
// }
// checkLeap()
//////////////////////Loops

for(let i = 2; i <= 50; i += 2){
    console.log(i)
}

/////////////////////

var q = 2
while(q != 52){
    console.log(q)
    q += 2
}

/////////////////////

for(let i = 2; i <= 50; i += 2){
    console.log(i)
}
for(let i = 1; i <= 50; i += 2){
    console.log(i);
}

////////////////////

for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("fizzBuzz")
    }
    else if (i % 5 == 0){
        console.log("buzz")
    }
    else if (i % 3 == 0){
        console.log("fizz");
    }
    else{
        console.log(i)
    }
}

///////////////////

function fizzbuzz(i){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("fizzBuzz")
    }
    else if (i % 5 == 0){
        console.log("buzz")
    }
    else if (i % 3 == 0){
        console.log("fizz")
    }
}
fizzbuzz(15)

///////////////////////

function findChar(char){
    var text4 = "Coding Academy by Orange"
    var result = 0
    var lower = text4.toLowerCase()
    var toArr = lower.split('')
    for (let i = 0; i < toArr.length; i++){
        if (toArr[i] === char){
            result ++
        }
    }
    console.log(result)
}
findChar('o')

///////////////////////

for (let i = 0; i <= 20; i++){
    console.log(i)
}

//////////////////////

for (let i = 3; i <= 29; i += 2){
    console.log(i);
}

//////////////////////

for (let i = 12; i >= -14; i -= 2){
    console.log(i);
}

//////////////////////

for (let i = 50; i >= 20; i--){
    if (i % 3 == 0){
        console.log(i);
    }
}

/////////////////////

var str8 = "CodingAcademy"
var arr8 = [7,500,'KH404','black',36]
for (let i = 0; i < arr8.length; i++){
    console.log(arr8[i]);
}
for (let i = 0; i < str8.length; i++){
    console.log(str8[i]);
}

////////////////////

var arr9 = [7,23,18,9,-13,38,-10,12,0,124]
var evens = [];
var odds = [];
for (let i = 0; i < arr9.length; i++){
    if (arr9[i] % 2 == 0)
        evens.push(arr9[i])
    else
        odds.push(arr9[i])
}
console.log(evens)
console.log(odds)

//////////////////

var protein = ['chicken','pork','tofu','beef','fish','beans']
var grain = ['rice','pasta','corn','potato','quinoa','crackers']
var vegetable = ['peas','green beans','kale','edamame','broccoli','asparagus']
var beverage = ['juice','milk','water','soy milk','soda','tea']
var dessert = ['apple','banana','more kale','ice cream','chocolate','kiwi']
function meals(x){
for (let i = 0; i < x; i++){
    var meal = []
    meal.push(protein[i])
    meal.push(grain[i])
    meal.push(vegetable[i])
    meal.push(beverage[i])
    meal.push(dessert[i])
    console.log(meal)
}
}
meals(6)

//////////////////