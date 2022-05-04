/**
 * 명시적인 연산자 사용 지양하기
 */

let number;
function decrement(number) {
    //이것 보다는
    number--;
    --number;
    //예측 가능하고 디버깅 쉬운
    number -= 1;
    number = number - 1
}

function increment(number) {
    // 이것보다는
    number++;
    ++number;
    // 이렇게
    number += 1;
    number = number + 1;
}

//이렇게 우선순위를 나누어 주어서 해야한다.
if( (isLogin && token) || user) {}