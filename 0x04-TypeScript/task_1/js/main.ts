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

console.log(teacher1);
console.log(director1);
