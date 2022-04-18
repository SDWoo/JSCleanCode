// 숏 코드 < 연관성
// 삼항 연산자 => 3개의 피연산자를 취함
//  조건 ? 참(식) : 거짓(식) ;

function example() {
    return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}

// 조건들을 정리하다가 정리가 안되면 if else 문 => switch 문으로 바꿔서 사용

const example = condition1
    ? (a === 0 ? 'zero' : 'positive')
    : 'nagative';


const welcomeMessage = (isLogin) => {
    const name = isLogin ? getName() : '이름없음';

    return `안녕하세여 ${name}`;
}


// alert는 void형이라 반환하는 경우가 undefined가 되버림
function alertee(isAdult) {
    isAdult
    ? alert('ㅇㅇ') // undefined
    : alert('ㄴㄴ') // undefined
}