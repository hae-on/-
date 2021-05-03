// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
1 1
12 34
5 500
40 60
1000 1000`;
const input = sample.split("\n");

let a = "";

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split("");
  a += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(a);
