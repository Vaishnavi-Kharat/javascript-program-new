const fruit = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruit);

console.log(`================= log first and last fruit ===================`);
console.log(`First fruit in the list is :-`);
console.log(fruit[0]);
console.log(`Last fruit in the list is :-`);
console.log(fruit[fruit.length-1]);

console.log(`==================== add fruit before the Banana ====================`);
const fruit1 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruit1);
console.log(`Add fruit before the Banana :-`);
fruit1.unshift("Papaya")
console.log(fruit1);

console.log(`===================== remove mango from the list =======================`);
const fruit2 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruit2);
let remove=fruit2.splice(3,1);
console.log(remove);
console.log(fruit2);

console.log(`======================= add element at last =======================`);
const fruit3 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruit3);
fruit3.push("Pineapple");
console.log(fruit3);

console.log(`================ insert fruit Dragon before the Water melon =====================`);
let array =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(array);
let add1=array.splice(4,0,"Dragon")
console.log(add1);
console.log(array);

console.log(`==================== replace the orange with kiwi ======================`);
let add2=array.splice(1,1,"Kiwi");
console.log(add2);
console.log(array);


















