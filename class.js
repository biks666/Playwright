let student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};

console.log(student);

let car = new Object();
car.brand = "BMW";
car.color = "Black";
console.log(car);

let ai = {
    sub1: "Machine Learning",
    sub2: "Deep Learning",
    sub3: "Natural Language Processing"
}
console.log(ai);

  
  class Student {
     name;
	 id;
	 subject
	 
  constructor (name, id, subject) {
     this.name = name;
	 this.id = id;
	 this.subject = subject;
	 }

  display() {
     console.log(this.name)  
     console.log(this.subject)  
	 console.log(this.id)  
	 }
}

 let obj1 = new Student("Ram",9,"AI")
 obj1.display();

 obj1.name
 console.log(obj1.name);  

 let obj2 = new Student("Shyam",214,"ML")  
 obj2.display();     


 