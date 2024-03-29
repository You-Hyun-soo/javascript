// 자료형과 변수
// 자료 -> 타입 -> data -> 값
/* 

    자료형(타입) -> 타입스크립트(MS)

    숫자 -> integer(int) -> 1, 10, 100 산술연산이 가능한것
    문자 -> string(str) -> 'hi', '하이', "문자"
    불리언 -> boolean -> true, false -> 0, 1
    널 -> null -> 비어있는 값
    미정의 -> undefined -> 정의가 없다.

    함수 -> function -> 값
    객체 -> object
    배열 -> array

*/

// console.log();
// 컴퓨터에 기록해라
// 스크립트는 위에서부터 한줄씩 처리한다.(첫번째에 오류가나면 두번째도 처리하지 못한다.)
// 인터프린터 언어(한라인씩 실행) -> python
// c언어 -> 컴파일언어
// console.log(200);
// console.log('200');

// 변수
// 변하는 수

// 변수는 값(데이터 -> 타입 -> 자료)을 담는다.
// 변수에는 오직 하나의 값만 존재한다.
// 메모리상의 데이터를 저장한다.
// =, ==, ===
// = 왼쪽에 오른쪽을 대입한다. (같다 x) 메모리 = 값
// variable 

// var a = 10;
// es6 -> let, const(낮은 브라우저에서 작동되지 않는다.)
var a;
a = 10;

b = 20; // 권장하지 않는다. var를 넣어주자.
var c = '문자';
var d = 100;
var total = b+d;
var e = d;
var f = e;
var h = f;
// console.log(total);

// 오류
// 단어로 사용하는 건 좋지 않다.
// 카멜표기법
// 의미있게 이름을 정하는게 중요하다.
// var num = 100;
// num = 200;
// console.log(num);

// 변수
/*

    1. 전역변수(global)
    2. 지역번수(local)
    3. 매개변수(parameter)
    4. 멤버변수(property)
*/

var open = Number(true);
// console.log(open);

var aa = null;
// console.log(aa);

var moonja = '공책';
var price = "1000원";
var buy = '구매';
// single quote double quote 상관없음
// 두개를 연달아 쓰는 것은 변수 string을 만들기 위해서임

// 문자의 +는 문자와 문자를 연결하는 기능을 가지고 있다.

var plus = '나는' +  moonja + '을 ' + price + '에 "'+ buy + '"했다.';
// es6부터 새로운 문자 표현법 블럭쿼터(block quote)
// ` ${변수} `
// 줄바꿈이 용이하다 (이전버전은 역슬레쉬를 넣어야한다.)
// 익스플로러 11에서도 지원을 하지 않는다 
var text = `나는 ${moonja}을 ${price}에 "${buy}"했다`;

//console.log(plus);

// es6
// let, const
// var vs let
// var => 함수단위의 변수
// let => 블럭(스코프 scope)단위의 변수
let pp = 100;
pp = 200;
console.log(pp);

const cat = 100; //상수(불변의 값) -> 다른 값으로 변경할 수 없다.
console.log(cat);

var bool = true;
console.log(10<20);

// 숫자
// 정수, 음수, 소수
var bb = 0.1;
var cc = 0.5;
var kk = (bb+cc).toFixed(1);//소수점의 자릿수 기본이 반올림

console.log(kk); // 부동소수점 오류 -> 프로그래밍 

var n1 = Math.round(1.55); // 반올림
n2 = Math.ceil(1.55); //올림
n3 = Math.floor(1.65); //내림
console.log(n3); 