import _ from "lodash";

console.log("inside index.js");

let myArr = [1, 2, 3];

_.fill(myArr, "a");

console.log(myArr);

console.log(process.env.TEST_SECRET);
console.log(process.env.TEST_DEV_ENV_SECRET);
