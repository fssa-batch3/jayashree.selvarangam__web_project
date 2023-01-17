


////////////////////////////first sum -Reverse number staircase//////////////////////////////////
// const n = 4
// for (let x = 1; x <= n; x++) {
//     let output = "  ";
//     for (let y = x; y >= 1; y--) {
//         output += y + " ";
//     }
//     console.log(output);
// }
////////////////////////fist sum////////////////////////////////////////////

// //////////////////////////////////second sum -Number diamond for n=4/////////////////////////////

//  let n = 4;
//  let string = "  ";
// // Pyramid
//  for (let i = 1; i <= n; i++) {
//    for (let k = 1; k <= i; k++) {
//     string += k;
//   }
//   string += " \n ";
//  }
//  // Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 1; k <= n - i; k++) {
//     string += k;
//    }
//   string += " \n ";
//  }
//  console.log(string);

///////////////////third sum - Consecutive Number Diamond//////////////////////////////


// let n = 4;
// let string = "  ";
// //Pyramid
// for (let i = 1; i <= n; i++) {
//  for (let k = 1; k <= i; k++) {
//    string += i;
//  }
//  string += " \n ";
// }
// //Reverse Pyramid
// for (let i = n-1; i >=  1; i++) {
//  for (let k = 1; k <= n - i; k++) {
//    string += i;
//  }
//  string += " \n ";
// }
// console.log(string);

///////////////////////////////////////////////////////
//////////////////// fourth sum -4. Superstar Rajnikanth Challenge
// For 1 to N if a number is a multiple of 3 it should print Superstar
// If a number is a multiple of 5 it should say Rajnikanth
// If a number is a multiple of 3 and 5 it should say SuperStar Rajnikanth
// Else the code should print the number.
// Example output for n = 15. //////////////////////

// const n = 15;

// for (let i = 1; i <= n; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("superstar rajinikanth");
//     }

//     else if (i % 3 === 0) {
//         console.log("superstar");
//     }

//     else if (i % 5 === 0) {
//         console.log("rajinikanth");
//     }

//     else {
//         console.log(i);
//     }

// }
////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////

// for (let count = 0; count < 100; count++) {
//     console.log("superstar");
//   }
// // console.log("superstar"*10)

// for (let i = 0; i <=100; i++) {
//     console.log(i+"superstar");
//   }

// for (let i = 1; i <= 100; i++) {

//     if (i % 2 == 1) {
//         console.log(i + "superstar");
//     }

//     else {
//         console.log(`${i}rajini`)
//     }
// }


// for (let i = 1; i <= 5; i++) {
//     console.log(i, i, i, i, i, i)
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(i, j)
//     }
// }


// for (int i = 1; i <= 5; ++i) {
//     console.log(i);
//     for (int j = 1; j <= 2; ++j) {
//         console.log(i);
//     }
// }

// const n = 5;

// for (let i = 1; i <= n; i++) {
//     let output = "";
//     for (j = 1; j <= n; j++) {
//         output += i + " ";
//     }
//     console.log(output);
// }


// for (let a = 1; a <= 5; a++) {
//     let o = " ";
//     for (let b = 1; b <= 5; b++) {
//         o += a + " ";
//     }
//     console.log(o);
// }


// const n = 5
// for (let a = 1; a <= n; a++) {
//     let o = " ";
//     for (let b = 1; b <= a; b++) {
//         o += b + " ";
//     }
//     console.log(o);
// }

// const n = 5;

// let o = "";
// for (let i = 0; i < n; i++) {
//     o = o + i + " ";
//     console.log(o);
// }
////////////////////////////////////////////////////////////////////////////////////////