// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let num = Number(input);

let num = `27`;

const star = (x, y, number) => {
  // 4, 7, 10 ... 형태로 공백
  if (x % 3 === 1 && y % 3 === 1) {
    return " ";
  } else {
    //   3의 배수인 경우 *출력 아래 식에서 number/3이 계속해서 결국 몫은 1이 남는다
    if (number === 1) {
      return "*";
    } else {
      return star(Math.floor(x / 3), Math.floor(y / 3), Math.floor(number / 3));
    }
  }
};

for (let i = 0; i < num; i++) {
  let result = "";
  for (let j = 0; j < num; j++) {
    result += star(i, j, num);
  }
  console.log(result);
}
