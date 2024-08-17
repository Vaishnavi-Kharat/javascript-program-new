console.log("=========== Question 1 - Check Greater Number ============");

function greaterNumber(n1,n2) {
    console.log(`The given numbers are = ${n1},${n2}`);
    var result =n1>n2 ? n1:n2;
    console.log(`The greater number is = ${result}`);
}
greaterNumber(10,-10);
console.log(`=======================================`);
greaterNumber(800,899);

console.log("=========== Question 2 - Check Greater Number ============");
function isEvenOrOddNum(num) {
    // console.log(`The given value is =  ${num}`);
    var result= num%2==0 ? true:false;
    return result;
    
}
var result = isEvenOrOddNum(29);
console.log("Is number  29 is even-",result);

var result = isEvenOrOddNum(24);
console.log("Is number 24 is even-",result);

var result = isEvenOrOddNum(0);
console.log("Is number 0 is even- ",result);

var result = isEvenOrOddNum(101);
console.log("Is number 101 is even- ",result);

console.log("=========== Question 3 - Check length of word is even or odd============");

function wordLength(word) {
    console.log(`Given word is-${word}`);
    var res = word.length;
    console.log(`The length of word is - ${res} `);
    var result = res%2 == 0 ? true : false;

    return result;
    
}
var result= wordLength("JavaScript");
console.log(`Is it a even - ${result}`);

console.log(`=============================`);

var result= wordLength("developer");
console.log(`Is it a even - ${result}`);
console.log(`==============================`);

var result= wordLength("Google");
console.log(`Is it a even - ${result}`);


