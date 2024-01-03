const myArr =[1,2,3,4,5,6,7,8,9,10];


// const total = myArr.reduce(function(acc,currval){
//     return (acc + currval)
// },5)

// console.log(total);


// let total = myArr.reduce( (acc,cval)=>acc+cval,2)

// console.log(total);



const itemArr = [
    {
        coursename:"JS",
        price:599
    },
    {
        coursename:"Java",
        price:599
    },
    {
        coursename:"React",
        price:499
    }
]


const priceTotal = itemArr.reduce((acc,item)=> acc+item.price,0)

console.log(priceTotal);