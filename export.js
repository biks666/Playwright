
export{a,add,Student}
let a = 10;

let add = (x,y)=> { 
    return x+y;
}

class Student {

    name;
    id;

constructor (name, id) {
    this.name = name
    this.id = id
}

display() {
    console.log(`Student name is: ${this.name} and Student ID is: ${this.id}`)
}
}

export default function greetings() {
    console.log("Hello Bikram")
}