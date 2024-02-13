import { multiply } from "../lessons/helper.js";
// import * as helper from "../lessons/helper.js";
// import { CustomerDetails } from "../lessons/helper.js";
import { customerDetails } from "../lessons/helper.js";

//Declarative function

hellOne(); // this can be called before declaring the function
function hellOne() {
  console.log("hello one");
}

//Anonymous function - can only be used after declaration
var helloTwo = function() {
  console.log("hello two");
};

helloTwo();

//Es6 Function

var hello3 = () => {
  console.log("hello three");
};

hello3();

var printName = (name) => {
  return `hello print name is ${name}`;
};

console.log(printName("Aadhi"));
// console.log(`Nultiple numbers ${multiply(5, 10)}`); // import { multiply } from "../lessons/helper.js";
// console.log(`Nultiple numbers ${helper.multiply(5, 10)}`); //import * as helper from "../lessons/helper.js";

// var customerDetails = new CustomerDetails(); //// import { CustomerDetails } from "../lessons/helper.js";
// customerDetails.printFirstName; //import * as helper from "../lessons/helper.js";
customerDetails.printFirstName();
