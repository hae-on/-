// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
happy
new
year`;
const input = sample.split("\n");

let countGroup = 0;

// 단어 통으로 돌리기
for (let i = 1; i <= input[0]; i++) {
  let str = [];
  let word = input[i];
  let groupWord = true;
  // 단어 각자의 알파벳으로 돌리기
  for (let j = 0; j < input[i].length; j++) {
    //   str에 중복이 없으면
    if (str.indexOf(word[j]) === -1) {
      // str에 word를 넣고 진행
      str.push(word[j]);
    } else {
      // str에 중복이 있으면 str의 단어와 마지막 알파벳 같은지 확인
      if (str.indexOf(word[j]) !== str.length - 1) {
        groupWord = false;
        break;
      }
    }
  }
  if (groupWord) {
    countGroup += 1;
  }
}

console.log(countGroup);
