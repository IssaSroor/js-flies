var object1 = {Fname: 'adam', age: 25, gender: 'male'}
console.log(object1.Fname + " " + object1.age + " " + object1.gender);
 
////////////////////////

var object2 = {Fname: 'adam', age: 25}
object2.gender = 'male'

console.log(object2.Fname + " " + object2.age + " " + object2.gender);

////////////////////////

var object3 = {Fname: 'adam', age: 25}
object3['gender'] = 'male'

console.log(object3.Fname + " " + object3.age + " " + object3.gender);

////////////////////////

var object4 = {Fname: 'adam', age: 25, gender: 'male'}
console.log(object4.Fname); 

////////////////////////

var object5 = {Fname: 'adam', age: 25, gender: 'male'}
for (i in object5){
    console.log(object5[i]);
}

////////////////////////

var object6 = {Fname: 'adam', age: 25, gender: 'male'}
var objectArray1 = Object.values(object6)
console.log(objectArray1);

////////////////////////

var object7 = {Fname: 'adam', age: 25, gender: 'male'}
var objectArray2 = Object.entries(object7)
console.log(objectArray2);

////////////////////////

var object8 = {Fname: 'adam', age: 25}
var object9 = {gender: 'male'}
var object10 = Object.assign(object8,object9)
console.log(object10);

////////////////////////

console.log(Object.freeze(object10));
object10.Fname = 'issa'
console.log(object10);

////////////////////////

console.log(Object.seal(object10));
object10.Fname = 'issa'
console.log(object10);

////////////////////////

