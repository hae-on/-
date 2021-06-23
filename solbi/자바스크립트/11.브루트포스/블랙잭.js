// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5 21
5 6 7 8 9`;
const input = sample.split("\n");

input[0] = input[0].split(" ");
const cards = input[1].split(" ").map((num) => Number(num)); // 5, 6, 7, 8, 9
const N = Number(input[0][0]); //5
const M = Number(input[0][1]); //21
let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum > max && sum <= M) {
        max = sum; // 18 19 20 21
      }
    }
  }
}
console.log(max);
