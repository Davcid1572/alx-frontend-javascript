// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional properties
}

// Example usage:
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Lagos",
  contract: false, // extra property allowed
};

const teacher2: Teacher = {
  firstName: "Amaka",
  lastName: "Okafor",
  fullTimeEmployee: false,
  yearsOfExperience: 10,
  location: "Abuja",
  subject: "Mathematics", // extra property allowed
};

// Logging them
console.log(teacher1);
console.log(teacher2);

interface Directors extends Teacher {
  numberOfReports: number;
}

// 3️⃣ Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Lagos",
  contract: false, // extra property allowed
};

const director1: Directors = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Abuja",
  numberOfReports: 5,
};

console.log(teacher3);
console.log(director1);
