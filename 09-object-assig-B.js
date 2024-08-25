console.log(`============ SBI Bank ===========`);
const sbiBank ={
    bankName : "SBI",
    location : "Sangli",
    accountNo : 123456676789,
    ifsc : "SBI1234",
    interestRate : 12.50,
    bankDetails : function() {
        console.log(`Bank Name : ${this.bankName}`,`,Location :${this.location}`,`,Account no : ${this.accountNo}`,`,IFSC :${this.ifsc}`,`,Interest rate :${this.interestRate}`);
    }
}
sbiBank.bankDetails();
console.log(sbiBank);


console.log(`============ Axis Bank ===========`);
const axisBank ={
    bankName : "Axis",
    location : "Pune",
    accountNo : 984245671734,
    ifsc : "AXIS1234",
    interestRate : 6.50,
    bankDetails : function() {
        console.log(`Bank Name : ${this.bankName}`,`,Location :${this.location}`,`,Account no : ${this.accountNo}`,`,IFSC :${this.ifsc}`,`,Interest rate :${this.interestRate}`);
    }
}
axisBank.bankDetails();
console.log(axisBank);


console.log(`============ Yes Bank ===========`);
const yesBank ={
    bankName : "Yes",
    location : "Karad",
    accountNo : 986745231345,
    ifsc : "YES1234",
    interestRate : 10.50,
    bankDetails : function() {
        console.log(`Bank Name : ${this.bankName}`,`,Location :${this.location}`,`,Account no : ${this.accountNo}`,`,IFSC :${this.ifsc}`,`,Interest rate :${this.interestRate}`);
    }
}
yesBank.bankDetails();
console.log(yesBank);