// local (block) scope not accessa globally but globally scopoe can access within block

var c = 300; // global scope
if (true) {
    let a = 10;    // local scope
    const b = 20;
    var c = 30;   // when comment this statement then value of global variable 'c' displayed, otherwise this value displayed after overwritten
}
// console.log(a);
// console.log(b);
// console.log(c);
// **********************************************************************
// Nested Scope
// Using function
function one(){
    const userName = "Nadeem Abbas";
    function two(){
        const website = "www.techcity.com";
        console.log(userName);
    }
    // console.log(website);
    two();
}
// one();

// Using if else
if (true) {
    const user = "Sarfraz";
    if (user === "Sarfraz") {
        const myWeb = " www.techcity.com";
        // console.log(user + myWeb);
    }
    // console.log(myWeb);
}
// console.log(user);

// *********************************************

// Methods to declare functions OR function Hoisting
console.log(addOne(5)); // function call before initilization, is working
function addOne(num){
    return num + 1;
}
// console.log(addOne(5)); // function call after initilization, is working
// ***********************
// console.log(addTwo(10)); // function call before initilization, not working
const addTwo = function(num2){
    return num2 + 2;
}
console.log(addTwo(10)); // function call after initilization, is working