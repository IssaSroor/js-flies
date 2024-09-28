for (let i = 1; i <= 10; i++){
    console.log(i);
}

/////////////////////////

var x = 1
while (x <= 10){
    console.log(x);
    x++
}

/////////////////////////

var arr = [1,2,3,4,5]
for (i in arr){
    console.log(arr[i]);
}

/////////////////////////

for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

/////////////////////////

var sum = 0 
for (let i = 1; i <= 10; i++){
    sum += i
}
console.log(sum);

/////////////////////////

var arr1 = [1,2,3,4,5]
arr1.sort()
console.log(arr1[arr1.length-1]);

/////////////////////////

var arr2 = [5,4,3,2,1]
arr1.sort()
console.log(arr1[0]);

/////////////////////////

var arr2 = [1,2,3,4,5]
var sum = 0 
for (let i = 0; i < arr2.length; i++){
    sum += arr2[i]
}
var avg = sum / arr2.length
console.log(avg);

/////////////////////////

var result = 1
for (let i = 5; i >= 1; i--){
    result *= i
}
console.log(result);

/////////////////////////

var n1 = 0
var n2 = 1
var nextTerm = 0
for (let i = 1; i <= 10; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    if(n1 >= 10){
        break;
    }
}

/////////////////////////

function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
  
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break; 
        }
      }
  
      if (isPrime) {
        console.log(i);
      }
    }
}
printPrimes(20);

/////////////////////////

var y = 5
for (let i = 1; i <= 10; i++){
    console.log(`${y} x ${i} = ${y * i}`);
}

/////////////////////////

var arr3 = [[1,2,3],[4,5,6],[7,8,9]]
for (i in arr3){
    for (j in arr3[i])
    console.log(arr3[i][j]);
}

/////////////////////////

var arr4 = [1,2,3,4,5]
arr4.reverse()
for (i in arr4){
    console.log(arr4[i]);
}

/////////////////////////

var arr5 = [1,2,3,4,5]
for (let i = 1; i < arr5[4]; i++){
    console.log(arr[i]);
}

////////////////////////

var arr5 = [1,2,3,4,5]
for (let i = 0; i < arr5[4]; i += 2){
    console.log(arr5[i]);
}

////////////////////////

var z = 4
var arr6 = [1,2,3,4,5]
for (i in arr6){
    if (arr6[i] == z){
        console.log(true);
    }
}

////////////////////////

var q = 1
var counter = 0
var arr7 = [1,2,1,4,1]
for (i in arr7){
    if (arr7[i] == q){
        counter++
    }
}
console.log(counter);

///////////////////////

