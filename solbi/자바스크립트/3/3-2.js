// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `5
11
23
34
98
52`;
const input = sample.split("\n");

for (let i = 1; i <= input[0]; i++) {
  let a = Number(input[i][0]);
  let b = Number(input[i][1]);
  console.log(a + b);
}
