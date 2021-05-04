// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const sample = `3`;
const input = sample.split(" ");

let n = Number(input[0]);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
