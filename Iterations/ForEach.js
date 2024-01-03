// array.forEach(element => {
    
// });

const coding =[
    "JS","Java","C++","Kotlin","React"
]



//callback function ====> a function which does not have any name.
// coding.forEach(function (item){
//     console.log(item);
// });


// Using Arrow function()
// coding.forEach((item)=>{
//     console.log(item);
// });

// Passing function as parameter

function print(item){
console.log(item);
}


// coding.forEach(print);  //just give the function reference


coding.forEach( (item,index,arr)=>{
// console.log(item,index,arr);
})



const myCode =[
    {
        language:"JS",
        filetype:".js"
    },
    {
        language:"Java",
        filetype:".java"
    },
    {
        language:"C++",
        filetype:".cpp"
    }
]

// myCode.forEach( (item)=>{
//     console.log(`${item.language} its filetype : ${item.filetype}`);
// })

// forEach loop don't returned anything if we dont use any condition


const myArr=[
    1,2,3,4,5,6,7,8,9,10
]


// const Value = myArr.forEach((item)=>{
//     return item;
// })

// console.log(Value);


// filter() 

// const value = myArr.filter( (item)=> item>5);

// console.log(value);

// const value = myArr.filter( (item)=> {
// return item>5
// });
// console.log(value);

// const myNewArr=[]
// myArr.forEach( (item)=>{
//     if(item>5){
//         myNewArr.push(item);
//     }
// })
// console.log(myNewArr);



// map()


// const value = myArr.map( (item) =>{
//     return item+10;
// })


// console.log(value);

// const value=[]

// myArr.forEach( (item) => {
//     item = item+10;

//     value.push(item)
// })


// console.log(value);



