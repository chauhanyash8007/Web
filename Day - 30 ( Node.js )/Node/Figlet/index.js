const figlet = require("figlet"); // ./ is Not require

figlet("YASH", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// if node_modules are deleted then we can bring then back by using package.json
// Type npm install
// only send package.json not node_modules ok while sending
