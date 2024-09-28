var arr = [1,2,3,4,5]
arr.forEach(element => {
    console.log(element);
});

//////////////////////////

var arr1 = [1,2,3,4,5]
arr1.map(function (x){
    console.log(Math.pow(x,2))
});

//////////////////////////

var arr2 = [1,2,3,4,5];
var evens = arr2.filter(function(x) {
   return x % 2 === 0;
})

console.log(evens);

//////////////////////////

var arr2 = [1,2,3,4,5];
var sum = arr2.reduce((accumulator, currentValue) => {
return accumulator + currentValue
})
console.log(sum)

//////////////////////////

var arr3 = ['cherry','banana','apple']
console.log(arr3.sort());

//////////////////////////

var arr4 = ['apple','banana','cherry']
console.log(arr4.reverse());

//////////////////////////

var arr5 = [1,2,3]
var arr6 = [4,5,6]
console.log(arr5.concat(arr6));

//////////////////////////

var arr7 = [1,2,3,4,5,6]
console.log(arr7.slice(2,4));

//////////////////////////

var arr8 = [1,2,3,4,5]
console.log(arr8.splice(2,1));

//////////////////////////

var arr9 = [1,2,3,4,5]
console.log(arr9.indexOf(3));

//////////////////////////

var arr10 = [1,2,3,4,5]
console.log(arr10.join(',')); 

//////////////////////////

var nums = "1,2,3,4,5"
console.log(nums.split(' '));

//////////////////////////

var arr10 = [1,2,3,4,5]
console.log(arr10.length); 

//////////////////////////

var arr11 = [1,2,3,4,5]
for (i in arr11){
    console.log(arr11);
}

//////////////////////////

var arr11 = [1,2,3,4,5]
for (i in arr11){
    console.log(arr11[i]);
}

//////////////////////////

var arr12 = [1,2,3,4,5]
console.log(Array.isArray(arr12));

//////////////////////////

var str = '12345'
console.log(Array.from(str));

//////////////////////////

console.log(Array.of(1,2,3,4,5)); 

//////////////////////////

var arr13 = [1,2,3,4,5]
console.log(arr13.fill(0,0,3)); 

//////////////////////////

var arr13 = [1,2,3,4,5]
console.log(arr13.copyWithin(0,1,3)); 