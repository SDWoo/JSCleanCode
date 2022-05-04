/** Default Case 고려하기(edge case)
 *  
 *  어떠한 라이브러리든 default값을 다 중요시 생각한다.
 *  사용자의 실수를 예방하기 위해 고려를 해야한다.
 */
// Example 1
function sum(x,y) {
    // default는 둘 다 1
    x = x || 1;
    y = y || 1;

    return x+y;
}

sum(100, 200);
// Example 2
function resgisterDay(userInputDay) {
    switch(userInputDay) {
        case '월요일': 
        //...
        case '일요일':
        default: 
            throw Error('입력값이 유효하지 않습니다.');
    }
}
// Example 3
// default는 10진수로 함
function safeParseInt(number, radix) {
    return parseInt(number, radix || 10)
}