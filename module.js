// const xyz = require('./people');


// // this xyz from exporting 
// console.log(xyz);
//
// console.log(xyz.x);


// console.log(people);



// const { people } = require('./people.js');

// console.log(people,ages);


//in this you just render ages 
//  const { ages } = require('./people');
//  console.log(ages);

//in this you just render ages and str 
 const { ages, str } = require('./people');
 console.log(ages);

 console.log(str);
 //this os file is built in in node js contain of vurrent operating system
 const os  = require('os');
 console.log(os.platform(),os.homedir() );


