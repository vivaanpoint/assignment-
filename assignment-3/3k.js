//Average for students

const input = [
  {
    subject1: 18,
    subject2: 26,
    subject3: 87,
    subject4: 90,
    subject5: 37
  },
  {
    subject1: 44,
    subject2: 56,
    subject3: 80,
    subject4: 95,
    subject5: 37
  },
  {
    subject1: 44,
    subject2: 52,
    subject3: 87,
    subject4: 97,
    subject5: 32
  }
];

const output = input.map(student => {
  const scores = Object.values(student);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return { average: avg };
});

console.log(output);
