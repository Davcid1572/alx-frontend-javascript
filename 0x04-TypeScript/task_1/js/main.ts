/**
 * 1. Teacher Interface
 * Defines the structure for a Teacher object, incorporating required,
 * optional, read-only, and arbitrary properties (index signature).
 */
interface Teacher {
  // Read-only properties: Only assignable during initialization.
  readonly firstName: string;
  readonly lastName: string;

  // Required properties: Must be defined.
  fullTimeEmployee: boolean;
  location: string;

  // Optional property: May or may not be defined.
  yearsOfExperience?: number;

  /**
   * Index Signature: Allows adding any additional properties whose key is a string
   * and whose value can be of any type (like 'contract: boolean').
   * Note: The types of the defined properties (string, boolean, number) must be
   * compatible with the index signature's value type, which is why 'any' is safe here.
   */
  [key: string]: any;
}

/**
 * 2. Directors Interface
 * Extends the Teacher interface and adds the required 'numberOfReports' property.
 */
interface Directors extends Teacher {
  // Required attribute specific to Directors.
  numberOfReports: number;
}

// --- Implementation Examples ---

// Example 1: Creating a Teacher instance
const mathTeacher: Teacher = {
  // The read-only properties are set here during creation
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Building A",
  yearsOfExperience: 8,
  // Arbitrary property allowed by the index signature
  contract: true,
  subject: "Mathematics", // Another arbitrary property
};

// Attempting to modify a read-only property will cause a compile-time error:
// mathTeacher.firstName = "John"; // ERROR: Cannot assign to 'firstName' because it is a read-only property.

// Example 2: Creating a Directors instance
const headDirector: Directors = {
  // Inherited Teacher properties
  firstName: "Alex",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Main Office",
  // New Director property
  numberOfReports: 15,
  // Arbitrary property
  budgetApproved: true,
};

// Example 3: Creating a Teacher instance without the optional field
const subTeacher: Teacher = {
  firstName: "Chris",
  lastName: "Hall",
  fullTimeEmployee: false, // Part-time
  location: "Online",
  // yearsOfExperience is correctly omitted
};

console.log("Math Teacher:", mathTeacher);
console.log("Head Director:", headDirector);
console.log("Substitute Teacher:", subTeacher);
