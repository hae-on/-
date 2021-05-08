// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `1 1
2 3
3 4
9 8
5 2`;
const input = sample.split("\n");

let i = Number(0);

while (input[i] != "") {
  let num = input[i].split(" ");
  let answer = Number(num[0]) + Number(num[1]);
  i++;
  console.log(answer);
}
