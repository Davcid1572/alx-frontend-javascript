// 1 Interfaces

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 2️⃣ Classes implementing interfaces

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

// 3️⃣ Factory function

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// 4️⃣ Example usage

const employee1 = createEmployee(200);
console.log(employee1.workFromHome()); // "Cannot work from home"

const employee2 = createEmployee(1000);
console.log(employee2.workFromHome()); // "Working from home"

const employee3 = createEmployee("600");
console.log(employee3.workFromHome()); // "Working from home"
