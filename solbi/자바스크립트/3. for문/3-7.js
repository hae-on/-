// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
1 1
2 3
3 4
9 8
5 2`;
const input = sample.split("\n");

let t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  let num = input[i].split(" ");
  console.log(`Case #${i}: ${Number(num[0]) + Number(num[1])}`);
}
