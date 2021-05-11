// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `5`;
const input = sample.split(" ");

let t = Number(input[0]);
let a = "";

for (let i = 1; i <= t; i++) {
  a += "*";
  console.log(a);
}
