function findSmallest(arr10){
    var smallest = arr10[0]
    for(let i = 0; i <= arr10.length; i++){
        
        if (smallest > arr10[i]){
            smallest = arr10[i]
        }
    }
    console.log(smallest);
}
findSmallest([30,45,60,7])
////////////////////////

function reorder(str5){
    console.log(str5.split('').sort().join(''))
}
reorder("hello")

///////////////////////

function factorial(x){
    var result = 1
    for (let i = x; i >= 1; i--){
        result *= i
    }
    console.log(result);
}
factorial(8)

/////////////////////

// function checkEven(){
//     var x = prompt("even/odd")
//     if (x % 2 == 0)
//         console.log("even")
//     else
//     console.log("odd")
// }
// checkEven()

////////////////////

function removeOdd(arr11){
    for (let i = 0; i < arr11.length; i++){
        if (arr11[i] % 2 != 0){
            arr11.splice(i,1)
        }
            
    }
    console.log(arr11);
}
removeOdd([1,2,3,4,5,6,7,8,9])

///////////////////

function removeStrings(arr12){
    for (let i = 0; i < arr12.length; i++){
    if (isNaN(arr12[i] - 5)){
        arr12.splice(i,1)
        console.log(arr12)
        }
    }
}
removeStrings(['ayham',3,7,'alaa',13,'coding'])

////////////////////

function addUp(x){
    var sum = 0 
    for (let i = x; i > 0; i--){
        sum += i
    }
    console.log(sum);
}
addUp(8)

////////////////////

function minMaxLengthAverage(arr13){
    var newArr = [];
    newArr[0] = Math.min(...arr13)
    newArr[1] = Math.max(...arr13)
    newArr[2] = arr13.length
    var sum = 0 
    for (let i = 0; i < arr13.length; i++){
        sum += arr13[i]
    } 
    var average = sum / arr13.length
    newArr[3] = average
    console.log(newArr);
}
minMaxLengthAverage([7,13,3,77,100])

///////////////////

function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    console.log(roman);
  }
  romanize(1989)

///////////////////

function lengthOfWords(str9){
    console.log(str9.split(' ').length)
}
lengthOfWords('hello from codingAcademy')

//////////////////

function multiplyByLength(arr14){
    for (i in arr14){
        arr14[i] = arr14[i] * arr14.length
    }
    console.log(arr14)
}
multiplyByLength([4,2,5])

//////////////////

function checkIfEqual(str10,str11){
    console.log(str10.slice(-str11.length) === str11);
}
checkIfEqual('codingSchool','Ac')

//////////////////

function doubleChar(str12){
    var toArray = str12.split('')
    for (i in toArray){
        toArray[i] += toArray[i]
    }
    
    console.log(toArray.join(''));
}
doubleChar('coding')

///////////////////

function findIndex(arr15,str13){
    for( i in arr15){
        if (arr15[i] === str13)
            console.log(i);
    }
}
findIndex(['ali','mazen','ayham','murad'],'ali')

///////////////////

function absSum(arr16){
    var sum = 0
    for ( i in arr16){
        arr16[i] = arr16[i] * -1
        sum += arr16[i]
    }
    console.log(sum);
}
absSum([-1,-3,-5,-4,-10,0])

//////////////////

