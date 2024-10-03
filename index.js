import _ from "lodash";

console.log("inside index.js");

let myArr = [1, 2, 3];

_.fill(myArr, "a");

console.log(myArr);

console.log("test_secret:", process.env.TEST_SECRET);
console.log("test_dev_env_secret:", process.env.TEST_DEV_ENV_SECRET);
