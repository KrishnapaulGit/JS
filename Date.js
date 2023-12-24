// Date is an Object in JS
//  Returns value in miliseconds since Jan 1 , 1970

// const myDate= new Date();
// console.log(myDate); //2023-12-24T12:10:16.778Z

/**
  Functions 


 */

//   console.log(myDate.getDate()); // 24
//   console.log(myDate.getDay()); // 0 for Sunday
//   console.log(myDate.getMonth()); // 0 for january
//   console.log(myDate.getTime()); //miliseconds
//   console.log(myDate.getHours());
//   console.log(myDate.getMinutes());
//   console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());


// UTC means Coordinated Universal Time

//   console.log(myDate.getUTCDate()); // 24
//   console.log(myDate.getUTCDay()); // 0 for Sunday
//   console.log(myDate.getMonth()); // 0 for january
//   console.log(myDate.getTime()); //miliseconds
//   console.log(myDate.getHours());
//   console.log(myDate.getMinutes());
//   console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());




// console.log(Date.now());  // returns miliseconds from midnight of jan 1, 1970

// console.log(Date.parse('01, 02'));//978373800000


// const MyDate = new Date(2023,11,20);

// console.log(MyDate.toLocaleDateString());

// MyDate.setDate(25)
// console.log(MyDate.getDate());//25

// console.log(MyDate.toLocaleDateString());//12/25/2023

// MyDate.setDate(25)
// MyDate.setMonth(0)  // 0 means January
// MyDate.setHours(25) // Hours can't be 25

// console.log(MyDate.getDate());//26 
// // console.log(MyDate.getDay());// 4
// console.log(MyDate.getDay());// 4



// console.log(MyDate.toLocaleDateString()); //1/26/2023


// We can also use UTC for Coordinated Universal Time
/**
Date.prototype.setUTCDate()
Date.prototype.setUTCFullYear()
Date.prototype.setUTCHours()
Date.prototype.setUTCMilliseconds()
Date.prototype.setUTCMinutes()
Date.prototype.setUTCMonth()
Date.prototype.setUTCSeconds()
 */


// If yearValue is a number between 0 and 99 (inclusive), 
// then the year for dateObj is set to 1900 + yearValue. Otherwise, the year for dateObj is set to yearValue

// const MyDate = new Date()
// MyDate.setYear(2025)
// console.log(MyDate.getYear());

// const MyDate = new Date(2023,10,24)

// console.log(MyDate.toLocalString('en-US',{timezone: 'UTC'}));


// const event = new Date(2023,11,24,7,35);

// console.log(event.toLocaleTimeString('en-IN'));//7:35:00 am
// Expected output: "1:15:30 AM"

// console.log(event.toTimeString());//07:35:00 GMT+0530 (India Standard Time)




/**
 * 
 * 
 * Constructor 
new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()
 */

// console.log(new Date());
// // console.log(new Date(0));//1970-01-01T00:00:00.000Z

// console.log(new Date(2023,0)); // 2023, jan (month index starts from 0)


// const MyDate = new Date('2023,11,25')
// In this case month starts from 1 as January


// console.log(MyDate.toString());//Sat Nov 25 2023 00:00:00 GMT+0530 (India Standard Time)

// const MyDate = new Date('December 23, 2023 7:30:00')
// console.log(MyDate.toString());//Sat Dec 23 2023 07:30:00 GMT+0530 (India Standard Time)

// console.log(MyDate.toLocaleDateString());//12/23/2023

// const MyDate = new Date('12,20,2023')
// console.log(MyDate.toLocaleDateString());//12/20/2023




// The valueOf() method of Date instances 
// returns the number of milliseconds for this date since the epoch, 
// which is defined as the midnight at the beginning of January 1, 1970, UTC.



