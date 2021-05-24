// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `2
3 ABC
5 /HTP`;
const input = sample.split("\n");
const count = Number(input[0]);
let result = "";

for (i = 1; i <= count; i++) {
  let R = Number(input[i].split(" ")[0]); //3 5
  let S = input[i].split(" ")[1]; // ABC /HTP
  for (k = 0; k < S.length; k++) {
    result += S.split("")[k].repeat(R);
  }
  result += "\n";
}
console.log(result);
