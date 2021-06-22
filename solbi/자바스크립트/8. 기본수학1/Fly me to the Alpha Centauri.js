// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
0 3
1 5
45 50`;
const input = sample.split("\n");

let T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let num = input[i].split(" ");
  let X = num[0];
  let Y = num[1];
  let K = Y - X;
  //  K의 중간값 (앞과 뒤가 1이므로 중간을 기준으로 앞과 뒤가 올라갔다 내려오는 식으로 속도가 변화한다)
  let N = Math.floor(Math.sqrt(K));
  let cnt = 0;
  // 이 경우는 1 2 1 or 1 2 4 2 1 처럼 앞 뒤가 같고 가운데 숫자만 같다. 이때는 가운데 기준 왼쪽값들의 합과 오른쪽값들의 합( 즉, 왼쪽값 * 2 or 오른쪽 값 *2)에서 1을 빼주면 딱 절반을 나눠가진다
  if (N * N == K) {
    cnt = 2 * N - 1;
    // 5와 같이 1 2 1 1 로 나눠지는 경우 밑의 식대로 하면 N이 절대로 완벽한 절반이 될 수 없다는 것을 알 수 있다
  } else if (N * N < K && K <= N * N + N) {
    cnt = 2 * N;
  } else {
    // 3과 같이 1 1 1 로 나눠지는 경우
    cnt = 2 * N + 1;
  }
  console.log(cnt);
}
