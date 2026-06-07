function greet(name, callback1) {
  
  console.log("Hello  " + name)
  callback1()
}

function goodBye() {
  
console.log("goodBye....take care")
}

greet("Bikram", goodBye)