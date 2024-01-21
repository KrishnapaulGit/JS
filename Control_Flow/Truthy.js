// Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// // Thruthy Values 
// "0", 'false', "(space)", [],{}, function(){}

const emptyArray=[]

if(emptyArray.length ===0){
    console.log("Empty Array");
}


// Empty Object

const emptyObject={}

if(Object.keys(emptyObject).length ===0){
    console.log("Empty Object");
}


// Nullish Coalescing Operator(??) : null and undefined

let val;
val = 5 ?? 10

// console.log(val);

let val2;

// val2= null ?? 10
// val2= null ?? undefined

// val2 = null??10??20


// console.log(val2); //10


// Ternarry Operator


// condition  ? true:false


const price=100;

price >=80 ? console.log(">80") : console.log("<80");