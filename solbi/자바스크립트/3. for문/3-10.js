// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `5`;
const input = sample.split(" ");

let t = Number(input[0]);
let a = "";

for (let i = 1; i <= t; i++) {
  for (let j = t - i; j >= 1; j--) {
    a += " ";
  }
  for (let k = 1; k <= i; k++) {
    a += "*";
  }
  a += "\n";
}

console.log(a);

// ## 두번째 풀이

let t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(i));
}
