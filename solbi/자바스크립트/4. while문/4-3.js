// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `26`;
const input = sample.split(" ");

let num = input;
let n = 0; //
let newnum;

// 십의 자리 = Math.floor(num / 10); //2
// 일의 자리 = num % 10; //6
// 합산 값 = Math.floor(num / 10) + (num % 10); //8

while (input != newnum) {
  let sum = Math.floor(num / 10) + (num % 10); //8
  newnum = (num % 10) * 10 + (sum % 10); //68
  num = newnum;
  n++;
}
console.log(n);
