// const myArr1 = ["Orange", "Apple", "Mango", "Banana"]
// const myArr2 = ["Car", "Bus", "Truck", "Wagon"]
// myArr1.push(myArr2)
// console.log(myArr1)
// console.log(myArr1[4])
// console.log(myArr1[4][2])

// const myArr3 = [123, 234, 345, 456, 567]
// const myArr4 = [23, 34, 45, 56, 67]
// const fullArr = myArr3.concat(myArr4)
// console.log(fullArr)
// const fullArr2 = [...myArr3, ...myArr4] // This ... is called spread operator
// console.log(fullArr2)

// const myArr5 = [12, 23, [34, 45], [56, 67, [89, 67]]]
// const myArr6 = myArr5.flat(2) // instead of numbered depth '2', infinity can be used
// console.log(myArr6)

// Convert Any type of data into Array
// console.log(Array.isArray("Nadeem")) // true or false
// console.log(Array.from("Nadeem")) // convert "Nadeem" into Array
console.log(Array.from({name: "Nadeem"})) // Gives an empty Array

let score1 = 250
let score2 = 350
let score3 = 450
console.log(Array.of(score1, score2, score3)) // create an new Array
