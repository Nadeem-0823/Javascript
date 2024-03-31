// Numbers in js

let a = 1000
console.log(a)

let b = new Number(12.56894)
console.log(b.toFixed(3))

let c1 = new String("123456")
console.log(c1)

let c2 = 25.89656
console.log(c2.toPrecision(3))
let c3 = 126.53557
console.log(c3.toPrecision(3))

let c4 = 1000000
console.log(c4.toLocaleString(`en-IN`))

//Math Library in js

console.log(Math)
console.log(Math.abs(-58))
console.log(Math.round(7.6568))
console.log(Math.ceil(4.256))
console.log(Math.floor(4.256))
console.log(Math.sqrt(64))
console.log(Math.min(4,2,3,5,6,9,5,4,1,2,56,9))
console.log(Math.max(47,2,6,8,9,7,44,56,999,55,325));

// Random Numbers

 console.log(Math.random())
 console.log((Math.random() * 10) + 1)
 console.log(((Math.random() * 10) + 1).toFixed(2))

 // Randomo Numbers another example

 let min = 10
 let max = 20
 console.log(((Math.random() * (max - min + 1)) + min).toFixed(0)) // first way
 console.log( Math.floor(Math.random() * (max - min + 1)) + min ) // second way


 

