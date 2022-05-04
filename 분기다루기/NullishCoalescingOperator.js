/**
 * 
 *  Null 병합 연산자 (??)
 *  => Null로 판단될 수 있는 operator에 사용
 *  => 거짓같은 값
 */

// null과 undefined는 값이 없어서 편리한데 0이나 -0같은 것들은 어렵다.
// 이렇게 || 대신 ??을 넣게 되면 null, undefined가 아닌 0같은 값은 할당된다.
function createElement(type,height,width) {
    const element = document.createElement(type ?? 'div');

    element.style.height = String(height ?? 10) + 'px';
    element.style.width = String(width ?? 10) + 'px';

    return element;
}

// 그러나 부작용이 일어날 수 있다. (null과 undefined 판단할 때만 사용해야 함)
function helloWorld(message) {
    // if(!message) {
    //     return 'Hello! World';
    // }

    // 이렇게 해줘야 정상적으로 작동함
    return 'Hello!' + (message ?? 'World');
    
}
// early return 시 위에서 0이나 undefined나 다 멈 춰버린다.
console.log(helloWorld(0));

// 부작용 2 (||와 ??를 같이 쓸 수 없음 => ()로 우선순위를 명시적으로 써주어야 함);
console.log((null || undefined) ?? 'foo');