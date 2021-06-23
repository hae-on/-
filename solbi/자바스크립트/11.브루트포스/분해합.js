// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `216`;
const input = sample.split(" ");
let num = parseInt(input);

let result = 1;

for (let i = 1; i < num; i++) {
  result = i;

  // 일의 자리 그대로 출력, 십의 자리 2개씩 출력, 백의 자리 3개씩 출력
  const iVaule = i.toString();
  for (let j = 0; j < iVaule.length; j++) {
    //   10이 1 0 11이 1 1 12이 1 2 이런 형식으로 쪼개져서 출력됨
    // 따라서 216을 구성하는 숫자들이 싹 다 쪼개져서 나온다고 보면 되는데 마지막에는 9와 8이 나온다.
    //  얘네 빼고 싹 다 더하면 198이고 9 + 8 하면 216 = input 값이 나온다
    result += parseInt(iVaule[j]);
  }
  if (result === num) {
    console.log(i);
    return;
  }
}
console.log(0);
