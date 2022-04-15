/** 1. Typeof
 * 타입 검사는 Primitive 타입인 경우는 typeof 로 가능한데
 * Reference 타입의 경우에는 null에서 문제 생김
 */

typeof null // 'object'
// JS에서 인정한 언어적 오류
// JS가 수정할 수 없다고 인정함
// Reference 검사가 어려운 다른 이유 => 자바스크립트가 동적인 언어라 동적인 타입까지 검사하기 어려움


/** 2. instanceof
 * 
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
} 

const p = {
    name: 'poco',
    age: 99
}
const poco = new Person('poco', 30)

poco instanceof Person // true
p instanceof Person // false

// Reference
const arr = []
const func = function() {}
const date = new Date()

arr instanceof Array //true but, Object also true
func instanceof Function //true but, Object also true
date instanceof Date //true but, Object also true
// 최상위에 Object가 있기 때문
// 좋은 기능
Object.prototype.toString.call() // 괄호안의 타입을 앵간하면 다 검사해줌

/**
 * 요약
 * JS = 동적인 타입 => 타입검사 어려움 => 잘 찾아서 검사해야 함
 * 안외워도 되는데 하나하나 잘 찾아서 검사해보자~.~ (최신걸로)
 */

/**
 * undefined & null: 명시적인 표현 값이 없거나 정의되지 않음. 
 * 둘의 차이점
 * => 숫자적 undefined = NaN, null = 0 
 * => type undefined = undefined, null = object
 * => 둘의 쓰임을 조심하고 프로젝트에서 쓰려면 어떤것만 쓸 것인지 정해야 한다.
 */