function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log(mergeObjects({ x: 1 }, { y: 2 })); 
