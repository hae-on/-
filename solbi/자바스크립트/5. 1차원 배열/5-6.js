// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`;
const input = sample.split("\n");

for (let i = 1; i <= input[0]; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}

//첫번째: i=1,j=0 => input[1][0] O임 그러면 카운트
//두번째: i=1,j=1 => input[1][1] O임 그러면 카운트
//세번째: i=1,j=2 => input[1][2] X임 그러면 count 초기화
