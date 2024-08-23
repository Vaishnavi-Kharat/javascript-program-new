const array = [20,31,40,25,23,11,29,9,60,2,11];
console.log(array);

console.log(`========================= Total elements in the array =======================`);
const array1 = [20,31,40,25,23,11,29,9,60,2,11];
console.log(array1);
console.log(`Total length of array is - ${array1.length}`);

console.log(`================= log first and last element ===================`);
console.log(array1[0]);
console.log(array1[array1.length-1]);

console.log(`================= log Third element ===================`);
console.log(array1[array1.length-9]);

console.log(`================= Find all even numbers ===================`);
let array2 =[20,31,40,25,23,11,29,9,60,2,11];
for (const element of array) {
    if (element%2==0) {
        console.log(element); 
    }
}

console.log(`================= Find all ODD numbers ===================`);
let array3 =[20,31,40,25,23,11,29,9,60,2,11];
for (const element of array) {
    if (element%2==1) {
        console.log(element); 
    }
}

console.log(`================= Find numbers multiple of 5 ===================`);
let array4 =[20,31,40,25,23,11,29,9,60,2,11];
for (const element of array) {
    if (element%5==0) {
        console.log(element); 
    }
}

console.log(`================= Is 115 is present in list ===================`);
let array5 =[20,31,40,25,23,11,29,9,60,2,11];
var res=array5.includes(115);
console.log(res);
// console.log(`Is 23 is present in the list - ${res}`);

console.log(`================= Is 23is present in list ===================`);
let array6=[20,31,40,25,23,11,29,9,60,2,11];
var result = array6.includes(23);
console.log(`Is 23 is present in the list - ${result}`);

console.log(`================= add element without deleting any element ===================`);
let array7 =[20,31,40,25,23,11,29,9,60,2,11];
console.log(array7);
let add1=array7.splice(3,0,55,66);
console.log(add1);
console.log(array7);

console.log(`=================  deleting the element ===================`);
let array8 =[20,31,40,25,23,11,29,9,60,2,11];
console.log(array8);
let del=array8.splice(4,3);
console.log(del);
console.log(array8);







