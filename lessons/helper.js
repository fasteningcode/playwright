export function multiply(num1, num2) {
  // console.log(`mulitplies numbers are ${num1 * num2}`);
  return num1 * num2;
}

// export class CustomerDetails {
//   printFirstName() {
//     console.log("Print First Name");
//   }
// }

class CustomerDetails {
  /**
   * Will print last name
   * @param {string} firstName
   */
  printFirstName(firstName) {
    console.log("Print First Name");
  }
}

export const customerDetails = new CustomerDetails();
