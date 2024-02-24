function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }


let favoriteNumber = 42;

const instructor = {
firstName: "Colt",
[favoriteNumber]: "That is my favorite!"
}


const teacher = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }


const d = createAnimal("dog", "bark", "Woof!")
d.bark()  
  
const c = createAnimal("cat", "meow", "Meoooow")

c.meow() 