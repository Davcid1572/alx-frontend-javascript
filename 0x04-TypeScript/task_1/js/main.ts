// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties
}

// Define the Directors interface that extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example objects
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Lagos",
  contract: false, // extra property allowed
};

const director1: Director = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Abuja",
  numberOfReports: 5,
};

// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }

// const printTeacher: printTeacherFunction = (firstName, lastName): string => {
//   return `${firstName[0]} ${lastName}`;
// };

// console.log(teacher1);
// console.log(director1);
// console.log(printTeacher("David", "Ifejiofor"));

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Declare the function normally (not anonymous)
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Assign it to a variable typed as the interface (optional but valid)
const teacherPrinter: PrintTeacherFunction = printTeacher;

// Example usage
console.log(printTeacher("John", "Doe")); // ✅ J. Doe
console.log(teacherPrinter("Jane", "Smith"));
