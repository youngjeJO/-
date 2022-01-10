// 숫자 클릭 시 casioHead와
// 연산 클릭 시 casioHead에 출력
// = 클릭 시 연산 결과값 casioHead와 casioInput에 출력

const btn_num = document.querySelectorAll('.casio_num');
const numli = document.querySelector('#casioHead');
const btn_oper = document.querySelectorAll('.casio_oper');
const numResult = document.querySelector('#casioInput');

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
        num1 = num1 + btn_num[i].innerText;
        numli.innerText = num1;
      } else {
        num1 = num1 + btn_num[i].innerText;
        numli.innerText = num1;
        console.log(num1);
      }
    }
  };
}
//계산 함수
function sum(num1, num2) {
  return Number(num1) + Number(num2);
}
function minus(num1, num2) {
  return Number(num1) - Number(num2);
}
function division(num1, num2) {
  return Number(num1) / Number(num2);
}
function multi(num1, num2) {
  return Number(num1) * Number(num2);
}

//계산 버튼
document.querySelector('#casioResult').onclick = function () {
  if (oper === '+') {
    numResult.innerText = sum(num1, num2);
    numli.innerText = sum(num1, num2);
    oper = '';
  } else if (oper === '-') {
    numResult.innerText = minus(num1, num2);
    numli.innerText = minus(num1, num2);
    oper = '';
  } else if (oper === '*') {
    numResult.innerText = multi(num1, num2);
    numli.innerText = multi(num1, num2);
    oper = '';
  } else if (oper === '/') {
    numResult.innerText = division(num1, num2);
    numli.innerText = division(num1, num2);
    oper = '';
  }
};

//reset 버튼
document.querySelector('#casioReset').onclick = function () {
  numResult.innerText = '';
  numli.innerText = '';
  num1 = '';
  num2 = '';
  oper = '';
};
