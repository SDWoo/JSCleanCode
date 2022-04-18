// true
// true, {}, [], 42, '0', 'false', new Data(), 12n, 3.14, Infinity, -Infinity 등

// false
// false, null, undefined, 0, -0, 0n, Nan, '' 

function printName(name) {
    if (name===undefined || name === null){ // => if(!name) 으로 해결 됨
        return '사람이없다'
    }
    return '안녕하세요' + name + '님';
}

console.log(printName());