// 'this' keyword in Object
// 'this' keyword refer to current context
const user = {
    userName: "Nadeem",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${this.userName}, welcome to website...`);
        // console.log(this);
    }
}
user.welcomeMessage();
user.userName = "Sarfraz";
user.welcomeMessage();
// console.log(this);

// *******************************************

// 'this' keyword in function
function chai(){
    let email = "nadeem@gmail.com";
    console.log(this.email); // result undefined
    console.log(this);
}
// chai();

const chai2 = function() {
    let id = "nad0302";
    console.log(this.id); // result undefined
    console.log(this);
}
// chai2();

// ************************************************

// Arrow function, in different ways
const chai3 = () => {
let id2 = "mcs2012";
console.log(this.id2);
console.log(this);
}
// chai3();

//********************************

const addTwo = (num1, num2) => {
    return num1 + num2;
}
// console.log(chai4(5,6));

// *******************************

const addTwo2 = (num3, num4) => num3 + num4;
// console.log(addTwo2(8,9));

// *******************************

const addTwo3 = (num5, num6) => (num5 + num6);
// console.log(addTwo3(7,7));

// *******************************

const objReturn = () => ({stuName: "Imran"}); // Object Return
console.log(objReturn());