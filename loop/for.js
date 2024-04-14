// for (let x = 0; x <= 10; x++) {
//     ele = x;
//     if (ele == 5) {
//         console.log(ele); // 5 print from here
//         // console.log("5 is best Number");
//         break;
//     }
//     console.log(ele); // 0 to 4 print from here
// }

// Nested For Loop
// Example 1
// for (let x = 1; x <= 4; x++) {
//     console.log("Outer Loop Value = ", x);
//     for (let y = 1; y <= 4; y++) {
//         console.log(`Inner Loop Value = ${y}`);
//     }
// }

// Example 2
// for (let i = 2; i <=5; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <=10; j++) { 
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// For Loop with Array
// Loop exexute less than Array Length otherwise 'undefined' occurs 
// let myArr = ["RAM", "ROM", "CPU", "Keyboard", "Mouse"];
// console.log(`Length of Array = ${myArr.length}`);
// for (let i = 0; i < myArr.length; i++) {
//     const ele = myArr[i];
//     console.log(ele);
// }

// For Loop with 'break'
// console.log("Loop with break");
// for (let i = 1; i <=8; i++) {
//     if(i == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i = ${i}`);
// }

// For Loop with 'continue'
// console.log("Loop with continue");
// for (let j = 1; j <=8; j++) {
//     if(j == 5){
//         console.log("Detected 5");
//         continue;
//     }
//     console.log(`Value of j = ${j}`);
// }