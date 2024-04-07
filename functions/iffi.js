// To avoid pollution of globel scope variables we use iffi
// named iffi
(function connectDB(){   
    console.log("Database Connected 1st time");
})();                 
// ; is must at the end of iffi, for ending of function

// *************

// without named
// iffi without parameters, arrow function
( () => {
console.log("Database connected 2nd time");
} )();

// *************

// iffi with parameters, arrow function
( (num) => {
    console.log(`You got ${num} marks`);
} )(95);