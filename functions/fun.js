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

function addNum2(n1, n2){
    // return n1 + n2;
let results = n1 + n2;
    return results;
    // console.log("This message never displayed because after return statement no statement executed");
}

const results = addNum2(35000, 45000);
// console.log("Results = ", results);

// Ways to pass values in function

function loginUser(userName){ 
    
    // // check that username entered or not
    // // if(userName === undefined){   OR
    //    if(!userName){  // empty string " " and undefined both are false values, we use also this code
    //     console.log("Please enter a valid username");
    //     return; // because of this next return statement not executed
    
    return `${userName} logged in`;
}

console.log(loginUser("Nadeem"));
// console.log(loginUser()); 