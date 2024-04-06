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

function loginUser(userName){ 
    
    // // check that username entered or not
    // // if(userName === undefined){   OR
    //    if(!userName){  // empty string " " and undefined both are false values, we use also this code
    //     console.log("Please enter a valid username");
    //     return; // because of this next return statement not executed
    
    return `${userName} logged in`;
}

// console.log(loginUser("Nadeem"));
// console.log(loginUser()); 

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

// function with objects

const user = {
    userName: "Nadeem",
    id: 399
}
function handleObject(anyObject){
console.log(`UserName is ${anyObject.userName} and id is ${anyObject.id}`);
}
// console.log(handleObject(user));

// another example, function with objects
function handleObject2(anyObject2){
console.log(`Company Name is ${anyObject2.company} and Price is ${anyObject2.price}`);
}
console.log(handleObject2({company: "Care", price: 3000}));