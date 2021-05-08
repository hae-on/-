// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `10 5
1 10 4 9 2 3 8 5 7 6`;
const input = sample.split("\n");

let a = input[0].split(" "); //10 5
let b = input[1].split(" "); // 1 10 4 9 2 3 8 5 7 6

let n = Number(a[0]); //10
let x = Number(a[1]); //5

for (i = 0; i <= n - 1; i++) {
  if (b[i] < x) {
    console.log(b[i]);
  }
}
