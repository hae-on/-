// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `2
1
3
2
3`;
const input = sample.split("\n");

// 쓸모 없는 첫 문자
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  //   [1, 3, 2, 3]을 차례로 k와 n이 번갈아가면서 꺼냄
  const k = +input.shift();
  const n = +input.shift();
  //   각 방 인원수 저장 2차원 배열  [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]   [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  //0층 [ [ 0, 1, 2, 3 ], [ 0, 0, 0, 0 ] ]  [ [ 0, 1, 2, 3 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }
  // 1층부터 k층 [ [ 0, 1, 2, 3 ], [ 0, 1, 3, 6 ] ]  [ [ 0, 1, 2, 3 ], [ 0, 1, 3, 6 ], [ 0, 1, 4, 10 ] ]
  //   K층 n호 = k층 n-1호 k-1층 n호
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
  console.log(house[k][n]);
}
