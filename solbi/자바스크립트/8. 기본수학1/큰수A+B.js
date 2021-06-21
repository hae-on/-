// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let sample = `9223372036854775807 9223372036854775808`;
let input = sample.split(" ").map((e) => BigInt(e));

let A = input[0];
let B = input[1];

console.log(A + B);

// 위 식으로 통과하지 못해서 찾아본 풀이
let [a, b] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => BigInt(v));
console.log((a + b).toString());
