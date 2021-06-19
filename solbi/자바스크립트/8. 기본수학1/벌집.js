// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `13`;
const input = sample.split(" ");

// 첫 문자가 1이기 때문
let sum = 1;
let i = 1;

while (sum < input) {
  sum += 6 * i;
  i++;
}

console.log(i);
