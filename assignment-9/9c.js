function modifyArray(arr) {
  arr.push("NewElement");
  arr.pop(); 
  return arr;
}

console.log(modifyArray(["A", "B", "C"]));
