// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
55 185
58 183
88 186
60 175
46 155`;
const input = sample.split("\n");

const T = input.shift();
// 위에서 첫번째 값을 제거하면 여기도 제거된 채로 나옴 제거를 안해서 틀렸던 것
const kgAndCm = input.map((el) => el.split(" ").map((num) => parseInt(num)));
const rank = [];

// [ '55 185', '58 183', '88 186', '60 175', '46 155' ]
for (let i = 0; i < T; i++) {
  let cnt = 0;
  for (let j = 0; j < T; j++) {
    if (i !== j) {
      // 몸무게랑 키가 둘 다 크다면
      if (kgAndCm[i][0] < kgAndCm[j][0] && kgAndCm[i][1] < kgAndCm[j][1]) {
        cnt++;
      }
    }
  }
  rank.push(cnt + 1);
}

console.log(rank.join(" "));
