// function one() {
//   return 1;
// }

// function tow() {
//   return one() + one();
// }

// function three() {
//   let ans = tow() + one();
//   console.log(ans);
// }

// three();
// callBack = callbacks are type of function that we pass them as a argument(parameter) in another function
//synchronous nature

// below code is asynchronous function
// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });
// callback nesting => callback hell

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Yash",
//   () => {
//     console.log(" Success Your Data was saved ");
//     savetoDb(
//       "Hello",
//       () => {
//         console.log("success2 Data2 was saved ");
//         savetoDb(
//           "YC",
//           () => {
//             console.log("success3 Data3 was saved ");
//           },
//           () => {
//             console.log("failure3 weak connection ");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 weak connection ");
//       }
//     );
//   },
//   () => {
//     console.log("failure weak connection . Data not saved");
//   }
// );

// success -> resolve , failure -> reject
// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve(" Success Your Data was saved ");
//     } else {
//       reject("failure weak connection . Data not saved");
//     }
//   });
// }
// request -> promise object
// savetoDb("Yash")
//   .then(() => {
//     console.log("data1 saved. Promise was resolved");
//     savetoDb("Hello").then(() => {
//       console.log("data2 saved. Promise was resolved");
//     });
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

// savetoDb("Yash")
//   .then((result) => {
//     console.log("data1 saved.");
//     console.log(result);
//     return savetoDb("Hello");
//   })
//   .then((result) => {
//     console.log("data2 saved.");
//     console.log(result);

//     return savetoDb("World");
//   })
//   .then((result) => {
//     console.log("data3 saved.");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Promise was rejected");
//     console.log(error);
//   });

// below code is asynchronous function
// reBuild Code
// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });

changeColor("red", 1000)
  .then(() => {
    console.log("red color complete");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color complete");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color complete");
    return changeColor("yellow", 1000);
  })
  .then(() => {
    console.log("yellow color complete");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color complete");
  })
  .catch(() => {
    console.log("color was not complete");
  });
