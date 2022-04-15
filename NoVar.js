// var => 함수스코프
// let, const => 블록스코프, TDZ

// Example 1 => 동일한 변수명(값)으로 선언해도 상관이 없음
var name = '이름';
var name = '이름2';
var name = '이름2';

console.log(name); //제일 마지막에 나온 이름2가 나옴

// 1000줄이 넘어가는 코드가 나오면 var 키워드 사용이 힘듬

// Example 2 => let, const

let name = '이름2';
let name = '이름2'; // Error가 남
name = '이름3'; //가능


const name = '이름2';
const name = '이름2'; // Error가 남
name = '이름3'; //Error

// Example 3 => Scope (function, block)

var gloabl = '전역'

if (gloabl === '전역') {
    var global = '지역' 

    console.log(global); //지역
}
console.log(global); // 지역

//var가 함수단위 스코프여서 이렇게 전역변수가 오염됨

let gloabl = '전역'

if (gloabl === '전역') {
    let global = '지역' 

    console.log(global); //지역
}
console.log(global); // 전역
// let(const)은 블록 스코프여서 좀 더 안전하게 생각한대로 코딩 가능

/* * let 보다 const를 쓰는게 좋은 이유?
=> 재할당이 안되는데 어떻게 쓰는 것인가? 
*/
// 객체
const person = {
    name: 'jang',
    age: '30',
}
person = {
    name: 'dong',
    age: '20'
} // 재할당이라 오류가 남

person.name = 'dong' // person의 재할당이 아니라 person의 name을 (레퍼런스 값) 조정했으니 이상 무

// 배열
const person =[{
    name: 'dong',
    age: 25
}]
person.push({
    name: 'woo',
    age: 30
})
// 재할당이 아니고 person에 woo라는 개체를 하나 추가해서 가능하다.
