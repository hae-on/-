// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const sample = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`;
const input = sample.split("\n");
let res = Number(input[0]);

for (let i = 1; i <= res; i++) {
  let sum = 0;
  let count = 0;
  let num = input[i].split(" ").map(Number);

  for (j = 1; j <= num[0]; j++) {
    sum += num[j];
  }
  let ave = sum / num[0];
  for (let k = 1; k <= num[0]; k++) {
    if (ave < num[k]) {
      count++;
    }
  }
  ans = ((count / num[0]) * 100).toFixed(3);
  console.log(ans + "%");
}
