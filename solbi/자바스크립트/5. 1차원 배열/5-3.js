// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const sample = `150
266
427`;
const input = sample.split("\n").map(Number);

// let a = input[0]; //150
// let b = input[1]; //266
// let c = input[2]; //427

let mul = String(input[0] * input[1] * input[2]); //17037300

for (let i = 0; i <= 9; i++) {
  console.log(mul.split(i).length - 1);
}
