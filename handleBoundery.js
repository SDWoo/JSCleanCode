/**
 * 경계 다루기 (min-max)
 * 
 * 1. 최소와 최대값을 다룬다.
 * 2. 최소값과 최대값 포함 여부를 결정해야한다.
 * 3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다.
 * ex) const MIN_NUMBER_LIMIT 등
 */

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

getRandomNumber(MIN_NUMBER, MAX_NUMBER);

/**
 * 팀마다 min, max의 포함유무에 따라 경계가 애매해질 수있음
 */

function isAdult(age) {
    // 최소값, 최대값 (포함되는지 vs 안되는지)
    // 이상, 초과 vs 이하, 미만 등을 정해야 함
    if(age >= 20){

    }
};


/**
 * 경계를 포함하지만 제외하는 경우
 */

function reservationDate(beginDate, endDate) {
    //...
}

reservationDate('YYYY_MM_DD', 'YYYY_MM_DD');


/**
 * first-end
 * 
 * 포함한 양 끝을 의미한다.
 * ~부터 ~까지
 */

const student = ['a','b','c'];

function getStudent(first, end) {
    //...
}

getStudent('a','b');


// 기본 Hook => use 라는 prefix 가 있다.
// 모든 jQuery 객체는 $라는 prefix가 있다.

class Classrrere {
    #name =name // private한 것
}
// underscore, lodash 라이브러리 _ prefix 있음
// 팀에서 스스로 정의한 것들도 있고
// 복수를 다루면 actions, components 등을 폴더이름 하는게 좋음

/**
 * 매개변수의 순서가 경계다
 * 
 * 호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다.
 * 
 * 1. 매개 변수의 개수는 2개가 넘지 않도록 만든다.
 * 2. arguments, rest parameter
 * 3. 랩핑하는 함수(함수를 호출하는 함수 만들기)
 * 4. 매개 변수를 객체로 만들어 넘긴다.
 */

function someFunc(someArg, someArg) {

}

