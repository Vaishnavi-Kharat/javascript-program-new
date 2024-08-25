let professor ={
    firstName : "Vaishnavi",
    lastName :" Kharat",
    collegeName : "RIT",
    age : 20,
    city : "Sangli",
    certificates : ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],
    degrees : {
        engineering:'CSC',
        PHD:'Adv Computing',
    }
}
console.log(professor);
console.log(professor.certificates);
console.log(professor.degrees);

console.log(`========== After object creation ==========`);
professor.totalExperience="14 years";
console.log(professor.totalExperience);

console.log(`========== Update age ==========`);
professor.age = 22;
console.log(`Update age is-${professor.age}`);
console.log(professor);

console.log(`========== Add 1 certificate in array ==========`);
let add =professor.certificates.splice(2,0,"Oracle Certified");
console.log(add);
console.log(professor.certificates);

console.log(`========== log last element of array ==========`);
let findElement =professor.certificates[professor.certificates.length-1];
console.log(`Last element of array is - ${findElement}`);

console.log(`========== Traversing the array - using for of loop ==========`);
for (const element of professor.certificates) {
    console.log(element);
}

console.log(`========== log complete object on console - using for in loop ==========`);
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key},${element}`);
    }
}














