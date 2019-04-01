const fetch = require("../src/index");
console.log(fetch);
fetch({
  // mothed: "get",
  url: "https://github.com/manifest.json",
  data: {
    a: "12",
    b: "16"
  }
})