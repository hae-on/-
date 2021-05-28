// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();

const sample = `ljes=njak`;
const input = sample.trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    //   ljes=njak ljes=njak ljes=njak ljes=njak aes=njak aes=aak aeaaak aeaaak
    input = input.split(alphabet).join("a");
  }
  return input.length;
}
console.log(solution(input));
