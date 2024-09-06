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

// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000);
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
function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve(" Success Your Data was saved ");
    } else {
      reject("failure weak connection . Data not saved");
    }
  });
}
// request -> promise object
savetoDb("Yash")
  .then(() => {
    console.log("Promise was resolved");
  })
  .catch(() => {
    console.log("Promise was rejected");
  });
