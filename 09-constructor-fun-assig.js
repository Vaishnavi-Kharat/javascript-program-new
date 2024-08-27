function bank (bankName,location,ifscCode,branchCode) {
    this.bankName=bankName;
    this.location=location;
    this.ifscCode= ifscCode;
    this.branchCode=branchCode;
}

const yesbank=new bank("Yes ", "Panvel", "YES45278", "00330");
console.log(`Bank Details = Bank Name : ${ yesbank.bankName}, Location : ${ yesbank.location}, IFSC Code : ${ yesbank.ifscCode}, Branch code : ${ yesbank.branchCode}`);
 
const sbibank=new bank("SBI", "Pune", "SBI1234", "1234");
console.log(`Bank Details = Bank Name : ${sbibank.bankName}, Location : ${sbibank.location}, IFSC Code : ${sbibank.ifscCode}, Branch code : ${sbibank.branchCode}`);

const mahbank=new bank("Maharashtra Bank", "Mumbai", "MH1234", "6633");
console.log(`Bank Details = Bank Name : ${ mahbank.bankName}, Location : ${ mahbank.location}, IFSC Code : ${ mahbank.ifscCode}, Branch code : ${ mahbank.branchCode}`);
 
const axisbank=new bank("AXIS Bank", "Delhi", "AXIS89234", "1234");
console.log(`Bank Details = Bank Name : ${axisbank.bankName}, Location : ${axisbank.location}, IFSC Code : ${axisbank.ifscCode}, Branch code : ${axisbank.branchCode}`);

console.log(`====== using prototype ======`);

bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";
console.log(`SBI Bank Open time : ${sbibank.openTime}, Close time : ${sbibank.closeTime}`);
console.log(`AXIS Bank Close time is :${sbibank.closeTime}`);
console.log(`YES Bank - ${yesbank.bankName}, Branch code is : ${yesbank.branchCode}, Open time is :${yesbank.openTime}`);