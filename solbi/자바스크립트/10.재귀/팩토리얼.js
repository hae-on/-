// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `10`;
const input = sample.split(" ");

let answer = 1;

for (let i = 1; i <= input * 1; i++) {
  answer *= i;
}

console.log(answer);
