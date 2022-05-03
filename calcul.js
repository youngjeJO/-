// 숫자 클릭 시 calculHead와
// 연산 클릭 시 calculHead에 출력
// = 클릭 시 연산 결과값 calculHead와 calculInput에 출력

const btn_num = document.querySelectorAll('.calcul_num');
const numli = document.querySelector('#calculHead');
const btn_oper = document.querySelectorAll('.calcul_oper');
const numResult = document.querySelector('#calculInput');

let num1 = '';
let num2 = '';
let oper;
for (let i = 0; i < btn_num.length; i++) {
  btn_num[i].onclick = function () {
    if (
      btn_num[i].innerText == '*' ||
      btn_num[i].innerText == '/' ||
      btn_num[i].innerText == '+' ||
      btn_num[i].innerText == '-'
    ) {
      if (oper) {
        return;
      } else if (num1) {
        oper = btn_num[i].innerText;
        numli.innerText += oper;
        console.log(oper);
      } else {
        alert('숫자부터 입력하세요');
      }
    } else if (oper === '*' || oper === '/' || oper === '+' || oper === '-') {
      num2 = num2 + btn_num[i].innerText;
      numli.innerText += btn_num[i].innerText;
      console.log(num2);
    } else {
      if (numResult.innerText) {
        numResult.innerText = '';
        numli.innerText = '';
        num1 = btn_num[i].innerText;
        numli.innerText = num1;
      } else {
        num1 = num1 + btn_num[i].innerText;
        numli.innerText = num1;
        console.log(num1);
      }
    }
  };
}
//계산 class
class Calcul {
  constructor(num1, num2) {
    this.num1 = Number(num1);
    this.num2 = Number(num2);
  }
  sum() {
    return this.num1 + this.num2;
  }
  minus() {
    return this.num1 - this.num2;
  }
  division() {
    return this.num1 / this.num2;
  }
  multi() {
    return this.num1 * this.num2;
  }
}

//계산 버튼
document.querySelector('#calculResult').onclick = function () {
  if (numResult.innerText) {
    num1 = numResult.innerText;
  }
  const result = new Calcul(num1, num2);
  console.log(result);
  if (oper === '+') {
    numResult.innerText = result.sum();
    numli.innerText = result.sum();
    oper = '';
    num2 = '';
  } else if (oper === '-') {
    numResult.innerText = result.minus();
    numli.innerText = result.minus();
    oper = '';
    num2 = '';
  } else if (oper === '*') {
    numResult.innerText = result.multi();
    numli.innerText = result.multi();
    oper = '';
    num2 = '';
  } else if (oper === '/') {
    numResult.innerText = result.division();
    numli.innerText = result.division();
    oper = '';
    num2 = '';
  }
};

//reset 버튼
document.querySelector('#calculReset').onclick = function () {
  numResult.innerText = '';
  numli.innerText = '';
  num1 = '';
  num2 = '';
  oper = '';
};
