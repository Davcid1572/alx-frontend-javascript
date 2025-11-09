// Define DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

//  Implement Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

//  Implement Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

//  createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// 6️⃣ Example usage
const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);
const emp3 = createEmployee("500");

console.log("**** Employee 1 ****");
console.log(emp1.workFromHome());
console.log(emp1.getCoffeeBreak());
if (emp1 instanceof Teacher) console.log(emp1.workTeacherTasks());

console.log("**** Employee 2 ****");
console.log(emp2.workFromHome());
console.log(emp2.getCoffeeBreak());
if (emp2 instanceof Director) console.log(emp2.workDirectorTasks());

console.log("**** Employee 3 ****");
console.log(emp3.workFromHome());
console.log(emp3.getCoffeeBreak());
if (emp3 instanceof Director) console.log(emp3.workDirectorTasks());

// 1️⃣ Create a string literal type
type Subjects = "Math" | "History";

// 2️⃣ Create the function teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}
