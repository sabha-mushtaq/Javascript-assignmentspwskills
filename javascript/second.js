

// q-3  checking results of examination
let studentsdata = [
{
    name : "rahul",
    marks : 77 ,
},
{
    name : "priya",
    marks : 97 ,
},

{

    name : "deepak",
    marks : 82 ,
},

{
    name : "sehrish",
    marks : 91 ,
},
{
    name : "neeraj",
    marks : 90,
},
{
    name : "kasul",
    marks : 67 ,
},
]

 function checkresult (studentsname) {

for (const student of studentsdata) {
    if (student.name === studentsname) {
        return student.marks >= 90 ? console.log(`congragulation ${student.name} you passed the exam with ${student.marks} marks`)
        :console.log(`sorry ${student.name} you did not clear the exam`);;
        break;
    }

    
}
console.log('Invalid User')
};
// q-1 username checking in the list
let users = ["payal","uraj","sahil","tapu"];
function checkuser(username) {
    if (users.includes(username) === true) {
        console.log(`yes ${username} is a valid username`);
       
    }
   else {console.log(`no ${username} is not a valid user`);}
}
// q-2 e- commerce company check total price
function totalcost(...prices) {
    let total = prices.reduce(function (acc,curr) {
        return acc + curr
    } ,0)
    return total
}


// q-4 e-commerce client finding minimum and max price product
const productsinfo =[
{ name : "macbook m1"  , price : 100000   },
{ name : "iphone"  , price : 150000 },
{ name : "sumsung infinity"  , price : 17000 },
{ name : "sumsung"  , price : 10000 },
{ name : "ipad"  , price : 32000 },
{ name : "cycle"  , price : 5000 },
{ name : "treadmil"  , price : 6000 }
]
function findmaxandmin(productlist) {
    let maxprice = -Infinity;
    let minprice = Infinity;
    let maxproductname = "";
    let minproductname = "";
    for (let index = 0; index < productlist.length; index++) {
        const element = productlist[index];
        const productprice = element.price;
        
if (productprice > maxprice) {
    maxprice = productprice;
    maxproductname = element.name;
}
if (productprice < minprice) {
    minprice = productprice;
    minproductname = element.name;
    
}

    }
    console.log(`The product with max price is ${maxproductname} which is priced at ${maxprice}`);
    console.log(`The product with min price is ${minproductname} which is priced at ${minprice}`)
}
findmaxandmin(productsinfo);
// q-5 event management company
let guestlist = ['akansha','sourbi','rahul','simran','parul','sankit'];
function givelist(guestlist) {
    const list = console.log(guestlist.join(","));
    return list
}
givelist(guestlist)
// q-6 e-commerce company product related information
const productdetails = {
name : "samsung galaxy infinity",
price : 17000,
RAM : "16GB",
color : "black",
memory : "32GB",


}
function giveproductdetails(productdetail) {
let keys = Object.keys(productdetail);

let values = Object.values(productdetail)
for (let index = 0; index < keys.length; index++) {
    console.log(`${keys[index]} : ${values[index]}`);
    
}



}
giveproductdetails(productdetails);

// q-7 generate unique otp
function generateotp() {
    let max = 5000;
    let min = 1000;
    let otp = Math.floor(Math.random() *  (max - min + 1) + min);
    console.log(`here is your otp ${otp}`);
     return otp;
    
}

let result = generateotp();
// q-8 event management company countdown timer
function calculatennumberofdays(eventdate) {
   let currentdate = new Date();
let dateofevent = new Date (eventdate);
 let timedifference = dateofevent - currentdate;
let daysremaining = Math.ceil(timedifference / (1000 * 60 * 60 * 24))
return daysremaining
}

console.log(`the number of days remaining are ${calculatennumberofdays("2024-05-10")}`);
// q-9 check unique characters
function check(name) {
    let arr = [];
    let set = new Set();
    for (const i of name) {
        arr.push(i);
        set.add(i);
    }
    if (arr.length === set.size) {
        console.log(`string is original`);
    } else {
        console.log(`sting is duplicate`);
    }
    
}
check("world")
// q-10 sentence examiner and word counter
let sentence = "please please please submit your assignment on time ,your assignments are important"
function examine(sentence) {
    const wordarr = sentence.split(" ").join(" ").replace(',','');
    let map = new Map();
    for (const word of wordarr.split(" ")) {
        let wordcount = map.get(word) || 0 ;
        map.set(word, wordcount + 1)

    }
    return map;
   
    
   
}
console.log(examine(sentence));








