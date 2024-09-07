// let jsonPes =
//   '{"fact":"The leopard is the most widespread of all big cats.","length":51}';
// console.log(jsonPes);

// let validRes = JSON.parse(jsonPes);
// console.log(validRes.fact);

// let student = {
//   name: "Yash",
//   mark: 38,
// };
// console.log(JSON.stringify(student));

let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log("async data : ", data.fact);
//   } catch (e) {
//     console.log(e);
//   }
// }

// getFacts();

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log(e);
    return "No fact found";
  }
}
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
  try {
    let image = await axios.get(url2);
    return image.data.message;
  } catch (e) {
    console.log(e);
    return "/";
  }
}

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", async () => {
  let link = await getImage();
  let image = document.querySelector("#image");
  image.setAttribute("src", link);
});

let url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url3, config);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

let url4 = "http://universities.hipolabs.com/search?name=";

let btn1 = document.querySelector("#search");
btn1.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let collegesArr = await getColleges(country);
  show(collegesArr);
});
async function getColleges(country) {
  try {
    let res = await axios.get(url4 + country);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

function show(collegesArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (college of collegesArr) {
    console.log(college.name);
    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
}

// let url4 =
//   "http://universities.hipolabs.com/search?country=India&name=India&state-province=";

// let btn1 = document.querySelector("#search");
// btn1.addEventListener("click", async () => {
//   let state = document.querySelector("input").value;
//   console.log(state);
//   let collegesArr = await getColleges(state);
//   show(collegesArr);
// });

// async function getColleges(state) {
//   try {
//     let res = await axios.get(url4 + state);
//     return res.data;
//   } catch (err) {
//     console.log(err);
//     return [];
//   }
// }

// function show(collegesArr) {
//   let list = document.querySelector("#list");
//   list.innerText = "";
//   for (college of collegesArr) {
//     console.log(college.name);
//     let li = document.createElement("li");
//     li.innerText = college.name;
//     list.appendChild(li);
//   }
// }
