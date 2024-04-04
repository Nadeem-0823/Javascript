// Object using constructor - Singleton i.e. object.create
// Object using litrral 

const mySym = Symbol("key1") // Symbol is decleared
const JsUser = {
    [mySym]: "myKey1", // Here symbol is defined, without [] its type is string which is wrong, must use []
    name: "Nadeem", // it process like a string i.e. "name": "Nadeem"
    age: 25,
    location: "Sargodha",
    email: "nadeem@gmail.com",
    "position": "first",
    isLoggedIn: false,
    "full name": "Nadeem Abbas",
    LastLoginDays: ["Monday", "Tuesday"]
}

// JsUser.name = "Zeeshan"
// Object.freeze(JsUser) // freeze the object values so cannot be change
// JsUser.age = 50 // overwrite age
// console.log(JsUser.email)
// console.log(JsUser.name)
// console.log(JsUser["position"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // Here Symbol is print
// console.log(JsUser.age);
// console.log(JsUser)

// Now check a function
JsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting2());
