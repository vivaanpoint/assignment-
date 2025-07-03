function sumOfProduct(n1, n2) {
  let str1 = n1.toString().split('').reverse();
  let str2 = n2.toString().split('').reverse();
  let sum = 0;

  let len = Math.max(str1.length, str2.length);

  for (let i = 0; i < len; i++) {
  let digit1 = Number(str1[i] || 0);
  let digit2 = Number(str2[i] || 0);
  sum += digit1 * digit2;
}

  return sum;
}

console.log(sumOfProduct(6, 34)); 
console.log(sumOfProduct(123, 456)); 
