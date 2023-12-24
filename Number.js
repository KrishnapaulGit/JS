// // // // // // In JavaScript Number can be used to represent 35 or -35.458
// // // // // // It represents floating-point number

// // // // // // 255; // two-hundred and fifty-five
// // // // // // 255.0; // same number
// // // // // // 255 === 255.0; // true
// // // // // // 255 === 0xff; // true (hexadecimal notation)
// // // // // // 255 === 0b11111111; // true (binary notation)
// // // // // // 255 === 0.255e3; // true (decimal exponential notation)

// // // // // // A number literal like 37 in JavaScript code is a floating-point value, not an integer


// // // // // // const num = new Number(367);  //constructor used to represent Number Object

// // // // // const num = Number(367) // function used to represent as number
// // // // // console.log(num);

// // // // // const num2 = 367
// // // // // console.log(num2);

// // // // // console.log(num==num2);

// // // // // console.log(typeof num);  //object
// // // // // console.log(typeof num2); //number

// // // // // console.log(num===num2); //false (Object type != number type)


// // // // const id = "123456"

// // // // const numId = 123456

// // // // // console.log(id==numId); //true
// // // // // console.log(id===numId); //false

// // // // const num2 = Number(id)
// // // // // console.log(num2===numId); //false

// // // // console.log(typeof id);  //string
// // // // console.log(typeof numId); //number
// // // // console.log(typeof num2);  // number

// // // // const num3 = String(numId)
// // // // console.log(num3===id); //true
// // // // console.log(typeof numId);  
// // // // console.log(typeof num3);  



// // // const name = new String("Codademy")

// // // const nameNum= new Number(name)
// // // console.log(typeof name);//string
// // // console.log(typeof nameNum);//number

// // // // console.log(name === nameNum);

// // // console.log(nameNum);  //NaN (returns if can't be converted to number)






// // // Static Properties 

// // // console.log(Number.EPSILON)
// // //Smallest interval b/w two representable number


// // // MAX_SAFE_INTEGER

// // const num = (Number.MAX_SAFE_INTEGER+1)
// // const num2 = (Number.MAX_SAFE_INTEGER+2)

// // console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
// // console.log(num);//9007199254740992

// // console.log(num===num2);  //true




// // Max value

// // console.log(BigInt(Number.MAX_VALUE));
// // console.log(Number.MAX_VALUE);//1.7976931348623157e+308

// // console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
// // console.log(Number.MIN_VALUE);//5e-324

// // NaN
// // console.log(Number.NaN);//NaN

// // Negative Infinity

// // console.log(Number.NEGATIVE_INFINITY); //-Infinity
// // console.log(Number.POSITIVE_INFINITY);//Infinity



// // Methods in Number

// // isFinite() - returns true or false
// // Syntax => Number.isFinite(value)

// const num = -215478

// // console.log(Number.isFinite(num)); //true

// const a = 10
// const b = 0

// // console.log(Number.isFinite(a/b)); // false


// // console.log(Number.isFinite(Infinity));//false
// // console.log(Number.isFinite(-Infinity));//false
// // console.log(Number.isFinite(NaN));//false
// // console.log(Number.isFinite(null));//false
// // console.log(Number.isFinite(0));//true
// // console.log(Number.isFinite("0"));//false


// console.log(isFinite(null));// true 
// // (because it is global isFinite() converted "null" to 0)
// console.log(isFinite(NaN));//false

// // console.log(isFinite(Infinity));// false
// console.log(isFinite(0));//true
// console.log(isFinite("0"));//true
// //"0" converted to 0




// const num = 325.5
// const num = 325

// console.log(Number.isInteger(num));//false

// console.log(Number.isInteger(num));//true


// NaN -
// The boolean value true if the given value is a number with value NaN. Otherwise, false.

// const num = 325

// console.log(Number.isNaN(num));//false

// const num2 = "325"
// console.log(Number.isNaN(num2));//false

// console.log(Number.isNaN(0/0)); //true


// Number.parseFloat(string)
// Number.parseInt(string)

// const num = "356.258"
// console.log(typeof num);

// console.log(Number.parseFloat(num)); //356.258

// console.log(Number.parseInt(num));//356

//console.log(parseFloat(num));//Global parseFloat same as Number.parseFloat()



// toExponential()
// toExponential(fractionDigits)

// const num = 3258.6985

// console.log(num.toPrecision(3));/3.26e+3
// console.log(num.toPrecision(2));//3.3e+3


// toFixed()
// toFixed(digits)
// const num = 3258.6985

// // console.log(num.toFixed());//3259 (rounding value)

// console.log(num.toFixed(2)); //3258.70 (rounding value with two decimal number)



// const num = 258

// // console.log(num.toFixed(3));//258.000

// toLocaleString()
// toLocaleString(locales)
// toLocaleString(locales, options)
// function eArabic(x) {
//     return x.toLocaleString('ar-EG');
//   }
  
//   console.log(eArabic(123456.789));
//   // Expected output: "١٢٣٬٤٥٦٫٧٨٩"
  
//   console.log(eArabic('123456.789'));
//   // Expected output: "123456.789"
  
//   console.log(eArabic(NaN));
//   // Expected output: "ليس رقم"

  
// const text = "123456"
//   console.log(text.toLocaleString("ar-EG"));


// toPrecision()
// toPrecision(precision)

// let num = 5.123456;

// console.log(num.toPrecision()); // '5.123456'
// console.log(num.toPrecision(5)); // '5.1235'
// console.log(num.toPrecision(2)); // '5.1'
// console.log(num.toPrecision(1)); // '5'

// toString()
// toString(radix)


// const num = 789456

// console.log(num.toString());//789456
// console.log(typeof (num.toString()));//string

// console.log(num.toString(2));//11000000101111010000
// console.log(num.toString(8));  //3005720




// valueof()
// const numObj = new Number(10);
// console.log(typeof numObj); // object

// const num = numObj.valueOf();
// console.log(num); // 10
// console.log(typeof num); // number













// const num = "-356.0001"

// // console.log(Math.abs(num));//356.0001

// console.log();




