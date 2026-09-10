// 1. Create a Person class
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

// 2. Create a Student class that extends Person
export class Student extends Person {
  constructor(name, age, scores = []) {
    super(name, age);
    this.scores = scores;
  }

  calculateAverageScore() {
    if (this.scores.length === 0) return 0;
    const total = this.scores.reduce((sum, score) => sum + score, 0);
    return total / this.scores.length;
  }

  displayFullStudentInformation() {
    const avg = this.calculateAverageScore().toFixed(2);
    return `${this.introduce()} Scores: [${this.scores.join(', ')}]. Average Score: ${avg}`;
  }
}

// 3. Use Rest Parameter
export const createScores = (...scores) => scores;

// 4. Use Destructuring
export const extractStudentInfo = (studentObj) => {
  const { name, age } = studentObj;
  return { name, age };
};

// 5. Use Spread Operator
export const addScores = (existingScores, newScores) => {
  return [...existingScores, ...newScores];
};

// 6. Use Array Methods
export const processScores = (scores) => {
  const passingScores = scores.filter((score) => score >= 5);
  const formattedScores = scores.map((score) => `Diem : ${score}`);
  const totalScore = scores.reduce((sum, score) => sum + score, 0);

  return { passingScores, formattedScores, totalScore };
};

// 7. Use Promise
export const evaluatePerformance = (avgScore) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (avgScore >= 8) {
        resolve("Excellent Student");
      } else {
        resolve("Need Improvement");
      }
    }, 500);
  });
};