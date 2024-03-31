let myArr = [11,12,13,14,15]
console.log(myArr)
console.log(myArr[3])
console.log(typeof myArr)

let myArr2 = ["Apple", true, "Banana"]
myArr2[6] = "Grapes"
console.log(myArr2)
console.log(Object.keys(myArr2))
console.log(myArr2[4])
console.log(myArr2[2])
console.log(myArr2.length)

let myArr3 = new Array("Copy", 15, null, true, "Book")
console.log(myArr3)

let myArr4 = ["RAM", "ROM", "CPU", 1024, "MOUSE", "KEYBOARD"]
console.log(myArr4)
myArr4.push("Graphic Card") // i element add at end
console.log(myArr4)
myArr4.pop() // 1 element remove from last
console.log(myArr4)
myArr4.unshift("Monitor") // 1 element at start
console.log(myArr4) 
myArr4.shift() // 1 element from start
console.log(myArr4)
myArr4.shift()
console.log(myArr4)
console.log(myArr4.includes("ROM"))
console.log(myArr4.includes(1000))
console.log(myArr4.indexOf("MOUSE"))
console.log(myArr4.indexOf(1000))

let myArr5 = ["Nadeem", "Qayyum", "Sarfraz", "Adeel", "Tahir"]
let myArr6 = myArr5.join() // join() method convert Array into String
console.log(myArr5)
console.log(typeof myArr5)
console.log(myArr6)
console.log(typeof myArr6)

let myArr7 = [256, 785, 965, 432, 268, 654]
console.log("A ", myArr7)

let myArr8 = myArr7.slice(0,3) // slice not change the orignal Array
console.log(myArr8)
console.log("B", myArr7)

let myArr9 = ["Lahore", "Karachi", "Multan", "Quetta", "Sargodha", "Sialkot"] // splice change the orignal Array
console.log("A", myArr9)
let myArr10 = myArr9.splice(0,3)
console.log(myArr10)
console.log("B", myArr9)






