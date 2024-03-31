// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.getDay())
// console.log(typeof myDate)

// Month start from 0 (Jan = 0)

// let myCreatedDate = new Date(2022,5,25)
// console.log(myCreatedDate)

// let myCreatedDate2 = new Date(2021, 6, 20, 7, 9)
// console.log(myCreatedDate2)

// let myCreatedDate3 = new Date("01-15-2024")
// console.log(myCreatedDate3.toLocaleDateString())

// let myCreatedDate4 = new Date(2020, 5, 26)
// let myTimeStamp = Date.now()
// console.log(myTimeStamp) // show time in miliseconds from 1-1-1970
// console.log(myCreatedDate4.getTime()) // Show selected time in milisecond
//convert into seconds
// console.log(Math.floor(Date.now()/1000))
// console.log(Math.floor(myCreatedDate4.getTime()/1000))

// Day start from 0 (Sunday = 0)
// let myNewDate = new Date()
// console.log(myNewDate.getDay())
// console.log(myNewDate.getDay()+1)
// console.log(myNewDate.getMonth())
// console.log(myNewDate.getMonth()+1)

// using interpulation using backticks
// let myNewDate2 = new Date()
// console.log(`Today Date is ${myNewDate2.toLocaleDateString()}`)

let myNewDate3 = new Date()
myNewDate3.toLocaleString(`default`, {
year:"2-digit"
})
console.log(myNewDate3)

