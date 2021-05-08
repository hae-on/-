// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let a = "";

for (let i = 1; i <= num; i++) {
  a += i + "\n";
}
console.log(a);
