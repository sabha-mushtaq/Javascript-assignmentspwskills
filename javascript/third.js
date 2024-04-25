//  object representing car properties
let carproperties = {

    name : "N scorpion",

    mileage : "14-15  kmpl",

    Price :
   " Rs. 13.60 Lakh onwards",
   Engine :
           "1997 cc & 2184 cc",
SeatingCapacity :
              "6 & 7 Seater",

Safety :
        "5 Star (Global NCAP)" ,

Transmission :
             "Manual & Automatic" ,

FuelType :
       "Petrol & Diesel"



};
function givedetails(object) {
    let keyvaluepairs = Object.entries(object);
    console.log(keyvaluepairs);

};
givedetails(carproperties);
//q-2  students informatin and grade updradation

let studentinfo = {
    name: "",
    age: null,
    grade: "",
    marks: 0, 
  };
  
  function upgrade(object) {
    let Grade; 
  
    if (object.marks >= 90) {
      Grade = "A";
    } else if (object.marks >= 80 && object.marks < 90) {
      Grade = "B";
    } else {
      Grade = "C";
    }
  
    console.log(`Your grade is ${Grade}`);
  }
  
  
  let student = {
    name: "John Doe",
    age: 18,
    grade: "",
    marks: 95,
  };
  
  upgrade(student);
//   q-3  property number
function propertynumber(object) {
  let number = Object.keys(object)  

   console.log(number.length);


}
propertynumber(student);
// q-4 check property name
function checkproperty(object,property) {

    if (object.hasOwnProperty(property)) {
         console.log(`yes,${property} is present in the given object`);
    } else {
        console.log(`no,${property} is present in the given object`);
    }
    
}
checkproperty(student,"FAVOURITE");
// Q-5 CALCULATE AREA OF A CIRCLE
function area(radius) {
    console.log((Math.PI) * (radius * radius));
}
area(5);
// q-6 string reverse
function reverse(string) {
    let result = string.split('').reverse().join('');
    console.log(result);
}
  reverse("sabha");
//   store and update user information
const usermap = new Map();
function manageuser(action, name, age,email) {
    switch (action) {
        case 'add':
            if (!usermap.has(name)) {
                usermap.set(name,{age,email});

                console.log(`user ${name} is sucessfully added`);
            } else {
                console.log(`user already exists`);
            }break;
            case 'delete' :
                if (usermap.has(name)) {
                    usermap.delete(name)
                    console.log(`user ${name} deleted sucessfully`);
                } else {
                    console.log(`user not found`);
                }
    break;
    case 'upgrade':
if (usermap.has(name)) {
    usermap.set(name,{age,email})
    console.log(`user ${name} upgraded sucessfully`);
}
else{

    console.log(`user not found.use add to upgrade records`);
}

        default:
            console.log(`invalid action.use add ,delete or update`);
            break;
    }
}


