// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const sample = `3
29
38
12
57
74
40
85
61`;
const input = sample.split("\n").map(Number);

let max = input[0]; //3
let maxcount = 0; //i의 순서를 세기 위한 변수

for (i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxcount = i;
  }
}
console.log(max);
console.log(maxcount + 1);
