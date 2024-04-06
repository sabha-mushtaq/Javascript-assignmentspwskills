// q-1 discount calculator
let price = 1200;
let discountedpercentage = 20;
let amountdiscounted = (1200*20)/100;
const finalprice = price - amountdiscounted;
console.log(finalprice);
// q-2 simple login system
let username = 'admin';
let password = '12345';
let a = 'admin';
let b = '12345';
if(a === username && b ===password){
console.log('login sucessful');
}else{
    console.log('invalid credentials');
}
// q-3 currency conversion application
let  indianrupees = 850;
let oneusd = 82;
let  amount =    ` 850  INR is  ${indianrupees/oneusd}`;
console.log(amount);
// q-4 booking application for cinema
let pjunior = 100;
let psenior = 120;
let padult = 150 ;
let njunior = 2;
let nsenior = 1;
let nadult = 2;
let totalprice = (pjunior*njunior)+(psenior*nsenior)+(padult*nadult);
console.log(totalprice);
// q-5 shipping application
let tyofpakage = "express";
switch (tyofpakage) {
    case "standard":
        console.log("might take 3-5 days");
        break;
case "express":
    console.log("might take 1-2 days");
    break;
    case "overnight":
        console.log("would be delivered the next day");
    default:
        break;
}
// q-6 form validation system
let Name = "jonny";
let email = 'jonny123@gmail.com'
let age  = "20";
if(typeof Name !== "string"){
    console.log("name should be a string")
} else if (typeof email !== "string"){
    console.log('email shoul be a string');
}else if(typeof age !== "number"){
    console.log('age should be a number');
}else{
    console.log('login sucessful');
}
// q-7 shopping list app
let items = ['apple','soap','pencil','flour','vegetables'];
for (let index = 0; index < items.length; index++) {
    console.log(items[index]);
    
}
// q-8 count down app
let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
    
}
// q-9  finding first string
let array = [3,4,5,6,'found','lost','happy'];
for (let index = 0; index < array.length; index++) {
    if (typeof array[index]=== 'string') {
        console.log(`found the first string ${array[index]}`);
        break;
    }
    
}
// q-10 print only positive
let array2 = [1,2,3,-6,7,-8,9,-19];
for (let index = 0; index < array2.length; index++) {
    if (array2[index] < 0 ) {
        continue;
    }
    console.log(array2[index]);
}