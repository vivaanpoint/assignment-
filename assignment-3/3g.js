const students = [
  { name: "Yuvraj", scores: [80, 70, 60] },
  { name: "Bhavesh", scores: [80, 70, 90] },
  { name: "Vishal", scores: [60, 70, 80] },
  { name: "Vivaan", scores: [90, 90, 80, 80] },
];

const avgScores = students.map(student => {
  const total = student.scores.reduce((a, b) => a + b, 0);
  const average = total / student.scores.length;
  return { name: student.name, average };
});

console.log(avgScores);
