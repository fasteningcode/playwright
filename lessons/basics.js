/* To run the code in this file 
    cd lessons
    node 1.js
*/

//Variables
var firstName = "Aadhi";
let lastName = "Bose";
const wontChange = "chang";

// Concatination and Interpolation
// console.log("Conatination " + firstName + " " + lastName);
// console.log(`Interpolation ${firstName} ${lastName}`);

// Objects

var customer = {
  firstName: "Aadhi",
  lastName: "Bose",
  cars: ["GT8"],
};

// console.log(`Printing as Object ${customer.firstName} ${customer.lastName}`);

//Arrays
var car = ["Mustang", "RX8"];
// console.log(`Printing as Arrays ${customer.cars[0]} is the choice`);

//relational or comparison operators

// >, <, >=,<+
var x = 1;
// console.log(x == "1"); //true lose comparison
// console.log(x === "1"); //false strict comparison, will compare type as well
// console.log(x == 1); //true

//loops
var testCars = ["Mustang", "RX8"];
for (let car in testCars) {
  console.log(car);
}

testCars.forEach((car) => {
  console.log(car);
});
