/**
 What is an Array 
 -> in other languages arrays are collection of similar elements
 -> But in Js arrays are the collection of data elements
 -----> data elements might be different types
 -----> arrays are resizeable
 -----> Index starts from 0 and has length property

 ----> in Js arrays copy operations create shallow copies 
    ----> shallow copies means all copies shares the same reference .. as a result if we change in any copy 
        then the actual array will efected .. simply it is Non - primitive
 */



/**
  Defining an Array
 */

//   const demoArray = ['Demo1','Demo2','Demo3']

//   console.log(demoArray);

//   // Find the length of the array

//   let length = demoArray.length  //because its property
//   console.log(length); // 3

//   //Access array elements

//   console.log(demoArray[0]);
//   console.log(demoArray[1]);
//   console.log(demoArray[2]);
//   console.log(demoArray[3]);  // undefined


//multi type elements

// const demoArray = ['Demo1',20,'Demo3',new String('Jadoo')]

// // console.log(demoArray.length);4

// console.log(demoArray[3]); //[String: 'Jadoo']
// console.log(typeof demoArray[3]); //object

// console.log(demoArray[1]);
// console.log(typeof demoArray[1]); //number



/*
 new Array()
new Array(element1)
new Array(element1, element2)
new Array(element1, element2, ......, elementN)
new Array(arrayLength)

Array()
Array(element1)
Array(element1, element2)
Array(element1, element2, …, elementN)
Array(arrayLength)
*/


// let testArr = Array(1,2,3,4,5)
// console.log(testArr);//[ 1, 2, 3, 4, 5 ]

// console.log(typeof testArr);
// let testArr2 = new Array(1,2,3,4,5)
// console.log(testArr2);//[ 1, 2, 3, 4, 5 ]

// console.log(typeof testArr2);  //object


// let testArr3 = Array()

// console.log(testArr3); //[]

// let testArr4 = Array(5)
// console.log(testArr4);  //[ <5 empty items> ]



/**
 Methods of Array
 */

 //push -->  add the elements at the end of the array


//  const demoArray =Array(5)
//  console.log(demoArray);
//  console.log(demoArray.length);

//  demoArray.push(2)
//  console.log(demoArray);
//  console.log(demoArray.length);

//  demoArray.push(3)
//  console.log(demoArray);
//  console.log(demoArray.length);  //7

//  demoArray[2]="Hello"
//  console.log(demoArray); //[ <2 empty items>, 'Hello', <2 empty items>, 2, 3 ]
//  console.log(demoArray.length);//7


// //  Pop() ---> Pop the ending element of the array


// demoArray.pop();
// demoArray.pop();

// console.log(demoArray);
// console.log(demoArray.length);



// at() ---> takes an integer value and returns the element the specified index element

// const demoArray = Array(1,2,4,3,5)

// console.log(demoArray.at(2)); //4
// console.log(demoArray.at(-2)); //3 ( count from the ending starts from -1)
// console.log(demoArray.at(-5));//1
// console.log(demoArray.at(-6));//undefined




// concat() ---> merge two or more arrays without change the actual arrays


// const Arr1 = Array('One','two','Three')
// const Arr2 = Array(1,2,3)
// const Arr3 = Arr1.concat(Arr2)

// console.log(Arr3); //[ 'One', 'two', 'Three', 1, 2, 3 ]

// const Arr4 = Array(4,5,6)

// const Arr5 = Arr1.concat(Arr2,Arr4) //[ 'One', 'two', 'Three', 1, 2, 3, 4, 5, 6 ] 
// const Arr5 = Arr2.concat(Arr1,Arr4) //[ 1, 2, 3, 'One', 'two', 'Three', 4, 5, 6 ]

// const Arr5 = Arr3.concat(Arr4) //[ 'One', 'two', 'Three', 1, 2, 3, 4, 5, 6 ] 



// console.log(Arr5); //[ 'One', 'two', 'Three', 1, 2, 3, 4, 5, 6 ] 


// const Arr6 = Arr3.concat(7,8,9)
// console.log(Arr6);  //[ 'One', 'two', 'Three', 1, 2, 3, 7, 8, 9 ] 


// copyWithin()  --> Shallow coping within the same array 
// that meas the chages will applied in the actual array

/*
copyWithin(target, start)
copyWithin(target, start, end)

*/

// const Arr = [ 1, 2, 3, 7, 8, 9 ] 

// console.log(Arr.copyWithin(0,2));  //[ 3, 7, 8, 9, 8, 9 ]
// console.log(Arr); // [ 3, 7, 8, 9, 8, 9 ]

// console.log(Arr.copyWithin(0,2));  //[ 3, 7, 8, 9, 8, 9 ]
// console.log(Arr.copyWithin(0,2,3));  //[8,7,9,9,8,9]
// console.log(Arr.copyWithin(2,0,3));  //[8,7,8,7,8,9]


/**
 fill(value)
fill(value, start)
fill(value, start, end)
 */

// console.log(Arr.fill(0)); //[ 0, 0, 0, 0, 0, 0 ]

// console.log(Arr); //[ 0, 0, 0, 0, 0, 0 ]

// console.log(Arr.fill(5,2));  // From index 2 fill with 5

// console.log(Arr.fill(6,2,5)); //[ 1, 2, 6, 6, 6, 9 ]
// // from index 2 fill with 6 until index 5

// console.log(Arr.fill(8,4,-9)); // No filled

// console.log(Arr.fill(8,9,6)); // No filled




// filter() --> filter the given array elements and create an shallow copy

/*
filter(callbackFn)
filter(callbackFn, thisArg)
*/


// const Arr= ['Rajes','Ravi','Raju','Pushpa']

// console.log(Arr.filter((names)=>names.length==4)); //[ 'Ravi', 'Raju' ]

// console.log(Arr); //[ 'Rajes', 'Ravi', 'Raju', 'Pushpa' ] 


// entries() -> returns the new array as the form of key, value pairs

// const Arr = ['a','b','c','d']

// console.log(Arr.entries().next().value);//[ 0, 'a' ]


// find() --->The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.


// const Arr = [10,50,32,40]

// console.log(Arr.find((value)=>value>20)); //50 (Because it returns first satisfied element)
// console.log(Arr.find((value)=>value>50)); //undefined

// // findIndex()---> is returns the  index of the first element in an array that satisfies the provided testing function 
// //same as find() -- just returns the index instead of the element value


// console.log(Arr.findIndex((value)=>value>20)); //1
// console.log(Arr.findIndex((value)=>value>50)); //-1 (Not find value >50 in the array)



// // findLast() --> same as find() just check from the end index of the array and returns the first satisfied value


// console.log(Arr.findLast((value)=>value>20)); //40 (Because it returns first satisfied element checking from the ending)

// console.log(Arr.findLastIndex((value)=>value>20)); //3/  findLastIndex() --> same as findIndex() just check from the end index of the array and returns the first satisfied value



// const Arr = [1,2,3,4,5,6,7,4]
// // unshift() --> adding element at the begining and returns the new array length
// console.log(Arr.unshift(9));  //6
// console.log(Arr); // [ 9, 1, 2, 3, 4, 5 ]


// //shift() ---. removes the first element and returns that element and reduce the length of the array

// console.log(Arr.shift()); //9
// console.log(Arr); //[ 1, 2, 3, 4, 5 ]



// // includes() --> returns the true or false whether the array includes the specified value or not

// console.log(Arr.includes(4)); //true
// console.log(Arr.includes(40)); //false

// indexOf() ---> returns the index of the given value in the array
//  if element not presents returns -1


// console.log(Arr.indexOf(5)); //4
// console.log(Arr.indexOf(50)); //-1



// console.log(Arr.indexOf(4,5));//7
// returns the next index of value of 4 counting starts from index 5




//join()---> returns a new string by concatenating all of the elements of the array separated by commas or a specified separator string


// const Arr = [1,2,3,4,5,6,7,4]

// const Arr2 = Arr.join()

// console.log(Arr2); //1,2,3,4,5,6,7,4
// const Arr3 = Arr.join("-")
// console.log(Arr3); //1-2-3-4-5-6-7-4

//lastIndexOf()  ---> returns the last index of the repeted element

// console.log(Arr.lastIndexOf(4));//7



// const Arr = [1,2,3,4,5,6,7,4]

// map() --> returns the new array of the populated result


// const Map= Arr.map((value)=>value+2)
// console.log(Map);/*[
//     3, 4, 5, 6,
//     7, 8, 9, 6
//   ]*/


//reverse() ---> reverse the elements of the array , chages applied in the  actual array 
// console.log(Arr.reverse());  
// console.log(Arr);


// sort()  --> sort the elements in accending orf=der by default also changes applied in the same array


// const Arr2 = Arr.sort()
// console.log(Arr2);

// console.log(Arr);



// const Arr = [1,2,3,4,5,6,7,4]


// const Arr2 =Arr.with(3,50)
// console.log(Arr2);  // will put the value 50 at index 3

// console.log(Arr); // Not changed



const Arr = [10,20,30,4,50,6,7,40]

//slice(start, end) --> returns the shallow copy of the elements from start to end-1


console.log(Arr.slice(2,6));
console.log(Arr);


// splice(start, end) --->changes the content of the array by removing or replacing or adding existing elements 
// print all the elements start to end

console.log(Arr.splice(2,6));
console.log(Arr);







































