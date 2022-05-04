/**
 * 드모르간의 법칙
 */

const isValidUser = true; // 서버에서
const isValidToken = true; // 서버에서

// true is not ture
// false is not false

if (isValidToken && isValidUser) {
    console.log('로그인 성공!')
}

if(!(isValidToken || isValidUser)) {
    console.log('로그인 실패!')
}

// if (!(A || B)){}
// if (!A && !B){}

// 연산이 많이 붙을 때 힘드므로 그 때 잘 사용하면 좋을 것이다.