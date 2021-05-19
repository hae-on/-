// let input = require('fs').readFileSync('/dev/stdin').toString();

const input = `110`; //백준 입력 시 이 줄 지우기
const n = parseInt(input);

function check(n) {
  let hansoo = 0;
  for (i = 1; i < n; i++) {
    //한자리수와 두자리수는 무조건 한수이다.
    if (i < 100) {
      hansoo++;
    } else {
      // 숫자의 값을 문자열로 바꾸고 나눠준 후 다시 수 형태로 바꾼다.
      const arr = String(i).split("").map(parseInt);
      if (arr[0] - arr[1] === arr[1] - arr[2]) {
        hansoo++;
      }
    }
  }
  console.log(hansoo);
}
check(n);
