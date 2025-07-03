function scopeExample() {
  var a = 10;    
  let b = 20;    
  const c = 30;  

  if (true) {
    var a = 40;  
    let b = 50; 
    const c = 60; 
    console.log("Inside block: ", a, b, c);
  }

  console.log("Outside block: ", a, b, c); 
}

scopeExample();
