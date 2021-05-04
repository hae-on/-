// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `5
1 1
2 3
3 4
9 8
5 2`;
const input = sample.split("\n");

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ");
  let a = Number(num[0]);
  let b = Number(num[1]);
  console.log(a + b);
}
