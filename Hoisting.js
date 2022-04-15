/* 호이스팅
=> 선언과 할당이 분리되는 것 (런타임 시기에)
=> 코드를 작성할 때 스코프 동작 예상 가능
=> 런타임때는 예상대로 움직이지 않음 == 호이스팅
=> var로 선언된 변수가 제대로 초기화 되어 있지 않을 때, undefined 되는것 (선언부만 위로 올라감) */

// Example 1
var global = 0;

function outer() {
    // var global
    console.log(global); // undefined
    // global = 5 와 밑 코드가 같음
    var global = 5;

    function inner() {
        var global = 10;
        console.log(global); // 10
    }

    inner();

    global = 1;
    console.log(global); // 1
}

outer();

// Example 2
// 변수 선언을 하고 같은 이름으로 함수를 선언하면 함수가 변수를 덮어씌움
// 변수 선언 => 할당 => 초기화 완료를 해서 완벽한 분리가 되면 그제서야 var 키워드 출력 가능
var sum //= 10;
console.log(sum()) // sum 가능

function sum () {
    return 1+2
}
function sum () {
    return 1+2+3
}
function sum () {
    return 1+2+3+5
}

// 이렇게 쓰는 것을 추천(함수 표현식)
const sum = function () {
    return 1+2;
};

console.log(sum()); //3

/** 
 * 호이스팅 정리
 * => 런타임시, 선언이 최상단으로 끌어올려지는 것
 * => var를 사용하지 않는다. (let과 const 사용하길 바람)
 * => 함수 조심 (함수 표현식을 사용하면 됨)
 * */   
