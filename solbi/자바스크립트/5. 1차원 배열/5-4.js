// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
//여기에 .trim()을 해줘야 함.

const sample = `42
84
252
420
840
126
42
84
420
126`;
const input = sample.split("\n").map(Number);

let a = input;

for (let i = 0; i < 10; i++) {
  a[i] = a[i] % 42;
}
//console.log(a); //[39 40 41 0 1 2 40 41 0 1] -> 중복 값 0, 1을 제거해야 함
a = new Set(a); //중복 값 제거
//console.log(a); //{39 40 41 0 1 2}
console.log([...a].length); //[39 40 41 0 1 2].length = 6
