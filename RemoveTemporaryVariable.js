/* 임수 변수 => 스코프안에서 전역변수처럼 사용되는 변수
 => 함수가 커지면 임시변수를 계속 만들게 되면 누군가(팀원, 나중의 나)가 힘들 수 있음
 * 임시변수나 객체를 어떻게 CRUD 할까?
 => 함수를 많이 나누는게 베스트 
 */

 // Example 1. 임시변수 객체 CRUD
 function getElements() {
     const result = {}

     result.title = document.querySelector('.title');
     result.text = document.querySelector('.text');
     result.value = document.querySelector('.value');

     return result
 }
 // query Selecter라는 웹API로 DOM을 가져와서 객체에 넣어주고 반환만 하면 끝임
 // 밑 코드처럼 깔끔하고 명확하게 바꿔도 됨 (한번 더 CRUD 하는 과정이 없음)
 function getElements() {
     const result = {
         title: document.querySelector('.title'),
         text:document.querySelector('.text'),
         value: document.querySelector('.value')
     }
     return result
 }
 // 더 명확하게 하려면 변수를 안만들어도 됨
 // 굳이 CRUD 할 필요없이 가능
 // 물론 이렇게 쿼리로 DOM을 가져오는 행위는 부작용 가능하지만,
 // element 받아서 반환만 할거면 임시변수를 만들 필요가 없다.
 function getElements() { 
     return {
         title: document.querySelector('.title'),
         text:document.querySelector('.text'),
         value: document.querySelector('.value')
     }
 }


/* Example 2. 추가적인 스펙 추가가 안되는 경우
* 기획이나 마케팅적인 요소로 날짜를 바꿔야 하면 두가지 경우로 바꿀 수 있다
1. 함수 추가 2. 이 함수를 수정 => 이 함수가 10~100가지 곳에서 사용할 경우 모든것을 다 바꿔야 함
*/
function getDatetime(targetDate) {
    let month = targetDate.getMonth();
    let day = targetDate.getData();
    let hour = targetDate.getHours();

    month= month > 30 ? month : '0' + month
    day=  day > 30 ?  day : '0' + day
    hour= hour > 30 ? hour : '0' + hour
    return {
        month, day, hour
    };
}
// 이것은 let 변수로 작성되었기 때문에 재할당, 수정을 하겠단 소리니
// 바로 리턴하도록 바꾸면 함수 수정 사항은 해당 함수를 한번 더 사용하면 된다.
function getDatetime(targetDate) {
    const month = targetDate.getMonth();
    const day = targetDate.getData();
    const hour = targetDate.getHours();

    return {
        month: month > 30 ? month : '0' + month,
        day: day > 30 ?  day : '0' + day,
        hour: hour > 30 ? hour : '0' + hour,
    };
}

function getDate() {
    const currentDateTime = getDateTime(new Date())

    return {
        month: computedKRDate(currentDateTime.month), // 이런식으로 하나씩 함수의 껍데기를 씌워나가고 벗기며 추상화 가능하다.
        day: currentDateTime.day + '분 전',
        hour: currentDateTime.hour + '분 전',
    }
}

/* 정리
* 임시변수 제거해야하는 이유
=> 명령형으로 가득한 로직
=> 어디서 어떻게 사용되는지 디버깅하기 힘듬
=> 추가적인 코드를 작성하고 싶은 유혹에 빠지기 쉬움(코드 유지보수가 어려움)
* 해결책
=> 함수 나누기
=> 바로 반환
=> 고차 함수 쓰기(map, filter, reduce)
=> 선언형 코드로 바꿔보는 연습하기
*/