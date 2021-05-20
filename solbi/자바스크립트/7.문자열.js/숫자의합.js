// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
54321`;
const input = sample.toString().split("\n");

let num = input[1].split("");
let sum = 0;
for (i = 0; i < input[0]; i++) {
  sum += Number(num[i]);
}
console.log(sum);
