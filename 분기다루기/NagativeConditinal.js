
// 부정 조건문 지양하기
/**
 * 1. 생각을 여러번 해야할 수 있다.
 * 2. 프로그래밍 언어 자체로 if문이 처음부터 오고 true부터 실행시킨다.
 * 
 * -예외
 * 1. Early return
 * 2. Form Validation
 * 3. 보안 혹은 검사하는 로직
 */

 function isNumber(num) {
    return Number.isNaN(num) && typeof num ==='number';
}
// 이렇게 헷갈릴거면
if (!Number.isNaN(3)) {
    console.log('숫자입니다.');
}
// 이렇게 쓰자
if (isNumber(3)) {
    console.log('숫자입니다.');
}


