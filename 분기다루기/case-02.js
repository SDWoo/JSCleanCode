
// else 피하기
// 이 부분에서 '안녕하세요' return 문을 else로 빼버리는 실수를 할 수도 있는데
// 그렇게 되면 모두가 해야될 '안녕하세요'를 성인이 아니면 못하게 되버리므로
// else쓸 때는 이걸 조심
function getHelloCustomer(user) {
    if (user.age < 20) {
        report(user);
    }

    return '안녕하세요'
}


// early return
// 이렇게 최상위 로직에 하나의 의존성이 있는 코드가 있을 때, ealry return 사용하면 좋다.
function 오늘하루(condition, weather, isJob) {
    if(condition !== 'GOOD'){
        return
    }
    
    공부();
    게임();
    유튜브보기();

    if (weather !== 'GOOD'){
        return
    }

    운동();
    빨래();
    
    if(isJob === 'GOOD'){
        야간업무();
        조기취침();
    }
}