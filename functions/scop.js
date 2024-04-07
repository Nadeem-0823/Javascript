// local (block) scope not accessa globally but globally scopoe can access within block

var c = 300; // global scope
if (true) {
    let a = 10;    // local scope
    const b = 20;
    var c = 30;   // when comment this statement then value of global variable 'c' displayed, otherwise this value displayed after overwritten
}
// console.log(a);
// console.log(b);
console.log(c);
// **********************************************************************
