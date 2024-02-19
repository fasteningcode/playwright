class learnUtils {

    printFirstName(firstName: string) {
        console.log(`First Name is ${firstName.trim()}`);
    }
}

export const learn = new learnUtils();

/*

// Export the 'Printer' class with a descriptive name and type annotation
export class Printer {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  // Use a clear and descriptive method name `printFormattedMessage`
  public printFormattedMessage(): void {
    // Apply formatting or other enhancements if desired
    const formattedMessage = `[Formatted Message]: ${this.message}`;
    console.log(formattedMessage);
  }
}

// Import the 'Printer' class from the source project
import { Printer } from './path/to/my-string-utils'; // Adjust the path according to your project structure

// Create an instance of the 'Printer' class and call its method
const myPrinter = new Printer('Hello, world!');
myPrinter.printFormattedMessage();


*/