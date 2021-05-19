//어떤 수 = 자기자신+ 첫자리+ 둘째자리+ 셋째자리

let arr = [];

for (let i = 0; i <= 10000; i++) {
  a(i);
}

function a(n) {
  if (n < 10) {
    arr[n + n] = 1;
  } else if (n < 100) {
    arr[n + parseInt(n / 10) + (n % 10)] = 1;
  } else if (n < 1000) {
    arr[n + parseInt(n / 100) + parseInt((n % 100) / 10) + (n % 10)] = 1;
  } else {
    arr[
      n +
        parseInt(n / 1000) +
        parseInt((n % 1000) / 100) +
        parseInt((n % 100) / 10) +
        (n % 10)
    ] = 1;
  }
}

for (let k = 1; k <= 10000; k++) {
  //false일 때 셀프넘버
  if (!arr[k]) {
    console.log(k);
  }
}

//다른 풀이
let arr = new Array(9999);
for (let i = 1; i <= 10000; i++) {
  let tmp = i;
  let sum = tmp;
  while (tmp > 0) {
    sum += tmp % 10;
    tmp = parseInt(tmp / 10);
  }
  arr[sum] = true;
}
for (let k = 1; k <= 10000; k++) {
  if (!arr[k]) {
    // console.log(k);
  }
}
