// Objecdt using Singleton (Constructor)
// we use const tinderUser = new Object() notation or we using const tinderUser = {} notation

const tinderUser = new Object() // this is singleton object
// console.log(tinderUser)

const tinderUser2 = {} // this in not singleton object
tinderUser2.id = "abc123"
tinderUser2.name = "Nadeem"
tinderUser2.isLoggedIn = false
// console.log(tinderUser2)

// OBjects within Object
const newUser = {
    email: "nadeem@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sarfraz",
            lastName: "Riaz"
        }
    }
}
// console.log(newUser);
// console.log(newUser.email);
// console.log(newUser.fullName);
// console.log(newUser.fullName.userFullName);
// console.log(newUser.fullName.userFullName.firstName);

// Merge Objects in one Object
const obj1 = {
    a: 10,
    b: 20
}
const obj2 = {
    c: 30,
    d: 40
}

const obj3 = { obj1, obj2}
// console.log(obj3)

// another systax to merge objets in one object
const obj4 = Object.assign(obj1, obj2)
// console.log(obj4)

// another systax to merge objects on one object, this syntax more readable ({} is target, other all objets are source)
const obj5 = Object.assign({}, obj1, obj2)
// console.log(obj5);

// To Merge objets in one object "Spread" syntax is mostly used
const obj6 = {...obj1, ...obj2}
// console.log(obj6);

// find 'key' and 'value' in the object
const tinderUser3 = {}
tinderUser3.id = "pak1947"
tinderUser3.name = "Adeel"
tinderUser3.isLoggedIn = true

// console.log(tinderUser3)
const tinderKey = Object.keys(tinderUser3)
// console.log(tinderKey);
const tinderVal = Object.values(tinderUser3)
// console.log(tinderVal)
const tinderEntries = Object.entries(tinderUser3) // Not mostly used
// console.log(tinderEntries)

// to find a specific property in the object
// console.log(tinderUser3.hasOwnProperty('id'));
// console.log(tinderUser3.hasOwnProperty('address'))

