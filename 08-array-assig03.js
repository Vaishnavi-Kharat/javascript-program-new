let array = [20,31,40,25,23,11,29,9,60,2,11];
console.log(array);

console.log(`=========== sum of all even positioned elements ==========`);
addition = 0;
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element = array[index];
        addition = addition + element ;
    }
}
console.log(addition);


console.log(`=========== sum of all odd positioned elements ==========`);
add = 0;
for (let index = 0; index < array.length; index++) {
    if (index%2==1) {
        const element = array[index];
        add = add + element ;
    }
}
console.log(add);

console.log(`=========== sum of all elements ==========`);
let sum=0;
for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
}
console.log(sum);


