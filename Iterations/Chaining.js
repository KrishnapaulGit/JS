

const myNums =[
    1,2,3,4,5,6,7,8,9,10
]

const value = myNums
.map( (item) => item*10)
.filter( (num)=> num>20)
.map( (i) => i+1)
.filter( (item) => item>50 )

console.log(value);