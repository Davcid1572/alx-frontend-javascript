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

// Define the printTeacher function type
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Implements the printTeacher function.
 * It takes the first name and last name, and returns the first initial of the first name
 * followed by a period, a space, and the full last name.
 *
 * @param firstName The first name of the teacher.
 * @param lastName The last name of the teacher.
 * @returns The formatted name string (e.g., "J. Doe").
 */
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  // Ensure the firstName is not empty before attempting to get the first letter
  if (!firstName || firstName.length === 0) {
    return lastName;
  }

  // Get the first character of the firstName and capitalize it (if needed, though type will keep case)
  const firstInitial = firstName.charAt(0);

  // Return the formatted string
  return `${firstInitial}. ${lastName}`;
};

// --- Example Usage ---

// Test Case 1: Standard name
const result1 = printTeacher("John", "Doe");
console.log(`printTeacher("John", "Doe") -> ${result1}`); // Output: J. Doe
