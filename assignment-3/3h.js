//Repeated sum of digits until single digit is obtained


function digitSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((a, b) => a + Number(b), 0);
  }
  return num;
}
console.log(digitSum(456)); 
