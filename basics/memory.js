// Memory is of two types
// stack (premitive like Number, String), heap (non premitive like array, object, function)

// stack (create a copy of orignal variable)

let var1 = "Teacher"
// let var2 = var1
let var2 = "Student"
console.log(var1)
console.log(var2)

// heap (call by reference)
let userOne = {
    name: "Nadeem",
    email: "nadeem@gmail.com"
}
// let userTwo = userOne
userTwo.name= "Imran Khan"
console.log(userOne.name)
console.log(userTwo.name)