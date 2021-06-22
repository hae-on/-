// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `3`;
const input = sample.split(" ");
let N = Number(input);
let answer = [];
let cnt = 0;

// num: 원반 갯수, from: 출발지 기둥 번호, to: 목적지 기둥 번호, other: 나머지 기둥 번호
function hanoi(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    // 원반 갯수보다 하나 적은 원반들을 다른 막대로 넣기
    hanoi(num - 1, from, to, other);
    answer.push([from, to]);
    cnt++;
    // 다른 막대로 넣었던 원반들을 큰 원반 위(목적지)에 올림
    hanoi(num - 1, other, from, to);
  }
}
hanoi(N, "1", "2", "3");
console.log(cnt);
console.log(answer.map((el) => el.join(" ")).join("\n"));
