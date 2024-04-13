*****Javascript Falsey Values*****
false, 0, -0, "", null, undefined, NaN, BigInt 0n

*****Javascript Truthy Values*****
"0", "false", " ", [], {}, function(){}

*****Check Empty Array*****
if(myArr.Length ===0){
console.log("Array is Empty")
}

*****Check Empty Object*****
const emptyObj = {}
if(Object.keys(emptyObj).Length === 0) {
console.log("Object is empty");
}

*****Important Points*****
false == 0 //true
false == "" //true
0 == "" //true

****Nullish Coalescing Operator (??)*****

let val1 = null ?? 10 // assign a value 10 otherwise assign null

let val2 = undefined ?? 15 // assign a value 15 otherwise assign undefined
