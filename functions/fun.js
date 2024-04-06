function addNum(num1, num2){  // parameters
// console.log(num1 + num2);
}
addNum(50, 100);  // arguments
addNum("Hello ", false);
addNum("Hello ", null);
addNum(50, " 100");
addNum(50, " Nadeem");

const result = addNum(1500, 2400);
// console.log("Result = ", result); // Here check the return type of function

// **************************************************************************************

function addNum2(n1, n2){
    // return n1 + n2;
let results = n1 + n2;
    return results;
    // console.log("This message never displayed because after return statement no statement executed");
}

const results = addNum2(35000, 45000);
// console.log("Results = ", results);

// ************************************************************************************************************

// Ways to pass values in function

function logInUser(userName){
        return `${userName} logged in`;
    }
// console.log(logInUser("Nadeem"));

// if no user pass as argument
function logInUser2(userName2){
    if(!userName2){
        // console.log("Please enter a valid UserName");
        return;
    }
return `${userName2} logged in`;
}
logInUser2();

// Now combined these 2 codes
function logInUser3(userName3){
    if(!userName3){
        // console.log("Please enter a valid UserName");
        return;
    }
return `${userName3} logged in`;
}
// console.log(logInUser3());


// *************************************************************************************

// funtions with unknown Number of Items
function showNum(...num){ // Rest OPerator/ Spread Operator
// console.log(num);
}
showNum(10,20,30,40,50);
// Another Example, functions with unknown Number of Items
function showNum2(val1, val2, ...num2){ 
    // console.log(num2);
    }
    showNum2(10,20,30,40,50);

// ***************************************************************************************************

// function with Objects

const user = {
    userName: "Nadeem",
    id: 399
}
function handleObject(anyObject){
// console.log(`UserName is ${anyObject.userName} and id is ${anyObject.id}`);
}
handleObject(user);

// another example, function with objects
function handleObject2(anyObject2){
// console.log(`Company Name is ${anyObject2.company} and Price is ${anyObject2.price}`);
}
handleObject2({company: "Care", price: 3000});

// *******************************************************************************

// function with Arrays
const myArray = [10, 20, 30, 40, 50];
function showArray(arrayElem){
return `${arrayElem} are elements of Array`;
}
console.log(showArray(myArray));

// Another way, function with Arrays

function showArray2(arrayElem2){
    // return `${arrayElem2} are elements of Array`;
    return arrayElem2[2];
}
console.log(showArray2([100, 200, 300, 500, 600]));