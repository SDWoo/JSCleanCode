/* 전역변수 사용하면 안됨
1. 경험
2. 누군가 혹은 자바스크립트 상태계
3. 강의 혹은 책
4. 회사 혹은 멘토
5. Lint 
에서 하지 말라고했을 것

* 전역 공간이란? Window(브라우저)와 Global(Node.js)로 나뉨 
=> 파일을 나누면 scope가 나뉘는 것 같지만, 스코프는 안 나뉘어짐

* 전역 공간 더럽히면 안되는 이유
=> 어디서나 접근 가능함
=> 스코프 분리 위험
=> 전역변수 X, 지역변수 O
=> window, global을 조작X
=> const, let ㄱㅊ
=> IIFE, moduel, closure 스코프를 나누기(고민을 해볼 필요가 있음)
*/

//index.js
var global = 'global';

console.log(global); // window 에서 접근 가능, index2.js에서 접근 가능
setTimeout(() => {
    console.log('1초');
}, 1000); //실행이 안되는데 setTimeout은 function이 아니라고 뜸 (index2.js에서 변수로 사용했기 때문)

//index2.js
console.log(global); // 오류 안남

var setTimeout = 'setTimeout'