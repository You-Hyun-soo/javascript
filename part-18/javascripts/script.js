// 연산자 & 조건문
/*

    자료형과 변수
    변수는 값을 대입한다.

    연산자
    연산 (형변환) -> 형변환 때문에 발생하는 문제
    비교연산자
    논리연산자

*/

var number = 10;
var string = '문자';
var number2 = 100;

// console.log(number + number2);
// console.log(number - number2);
// console.log(number * number2);
// console.log(number / number2);
// console.log(number % number2); // 나머지를 구하는 내용 // 2x2 3x3 리스크를 만들때 사용한다.

// console.log(number + string); 
// // 숫자 + 문자, 문자 + 문자 에서 +는 문자열붙이기 동작한다.
// // 형변환이 나타난다. (숫자 -> 문자)
// var string2 = '10';
// console.log(number.toString() + Number(string2));//1010
// //.toString() -> 문자처리  / Number() -> 숫자처리
// console.log(number - string2);//0
// 숫자 - 문자 -> 문자(숫자형태의 문자)가 숫자로 형변환

// 비교연산자(두개 이상의 값이 필요하다.)
/* 
    A = B (B의 값을 A에 대입한다.)
    A == B (A와 B는 같다.)
    A === B (A와 B는 값과 형이 모두 같다.)
    : React 에서 A==B 라고 쓰면 경고(그냥 둬도 된다)가 나타난다.

    a > b , a < b -> 크다 와 작다
    a >= b, a <= b -> 크거나 같다, 작거나 같다 / 부등호를 먼저 쓰드록하자.

    //논리연산자
    ! -> 부정의 의미(반대의 의미) true -> false / false -> true
    && -> and -> 2개 이상의 조건이 모두 참일 때 참을 표현한다. 
    || -> or -> 2개 이상의 조건 중에 하나라도 참이면 참이다.
*/
//console.log(10 >= '10'); // 불리언 자료형 // 형변환 형비교는 없다.

var num1 = 10;
var num2 = 20;

// console.log(!(num1 > num2));
// console.log(num1 != num2); // !==은 ===을 부정한다.
// console.log(num1 < num2 && num1 + num2 < num2 && num1*num2 > num1); // and와 or은 같이 쓰는 일이 거의 없다.
// console.log(num1 < num2 || num1 + num2 < num2);

var open = "열다";
//!가 없는 상태는 true이다.
//문자에 내용이 없으면 false이고 니용이 이으면 true이다.

// console.log(!open);

// 조건문
// 조건문과 반복문만 있으면 모든 서비스를 개발할 수 있다.

/* 
    조건 -> if -> 만약에

    영화예매

    1. 영화 혹은 극장을 선택한다. -> 만약... 미개봉영화, 오픈하지 않은 극장
    2. 시간을 선택한다. -> 상영시간이 아닐 수 있다.
    3. 좌석을 선택한다. -> 프리미엄 좌석 , 커플석, 장애인석
    4. 결제를 선택한다. -> 카드, 현금, 입금
    5. 구매완료

*/

// if(조건){조건이 참이면 실행한다.}
/*
    var 일반인
    var 커플인

    if( 일반인 == 일반좌석) {
        결제를 수락한다.
    }
    true일 때 실행 false일 때 실행x
*/
//(조건)에는 비교연산, 논리연산, 불리언타입
/*if(!false){
    console.log('조건이 참일경우 실행되는 기능');
}*/

/*if(10<5){
    console.log('첫번째 기능');
}
else{
    console.log('두번째 기능');
}*/

var n1 = 20;
var n2 = 20;

if (n1 >= n2) {
    // console.log('n1이 크다');
}

if (n1 < n2) {
    // console.log('n2가 크다');
}

if (n1 == n2) {
    // console.log('n1과 n2는 같다');
}
/*if (n1>n2) {
    console.log('n1이 크다');
}
else if(n1 < n2){
    console.log('n2가 크다');
}
else {
    console.log('n1과 n2는 같다');
}*/

//조건문은 위에서부터 처리 위에서 조건이 부합하면 아래에 연산을 처리하지 않는다.
// else는 위의 경우를 뺀 모든 나머지의 수를 뜻한다.
// if else는 하나의 조건을 추출해내기 위해서 사용한다.

// 2번쨰 조건문
// if 문이 가장많이 쓰인다.
// switch 문 -> 요새 엄청쓴다. -> React + Redux
// switch 가독성이 좋다.

/*

    switch(값){
        case  비교값:
            값과 비교값이 같으면 실행된다.
            break;
        case 비교값:
            값과 비교값이 같으면 실행된다.
            break;
        case 비교값:
            값과 비교값이 같으면 실행된다.
            break;
    
        default:
            어떤 값도 같지 않으면 실행한다
            break;
    }
    //오직 1개의 기능만 실행되게 한다.
    //break의 역할은 하나의 조건이 부합하면 막아주는 역할이다.
*/

var k = 100;

switch(k){
    case 10 :
        console.log('1');
        break;
    case 50 + 50 : // 형비교도 한다.
        console.log('2');
        break;
    default:
        console.log('3');
        break;
}

// if , switch 취향따라 씁시다

// 회원가입 값체크 (validation check)
/*

    1. 아이디를 입력하였는가?
    2. 비밀번호를 입력하였는가?
    3. 비밀번호는 8자리 작성하였는가?
    4. 비밀번호 확인을 하였는가?
    
*/

document.getElementById('submit').addEventListener('click',function(){

    //1. 아이디를 입력
    var user = document.getElementById('user').value
    var password = document.getElementById('password').value;
    var count = password.length;
    var confirm = document.getElementById('confirm').value;

    if( !user ){
        alert('아이디가 입력되지 않았습니다.');
        return; // 함수의 종료
    }
    if( !password){
        alert('비밀번호가 입력되지 않았습니다.');
        return;
    }
    if( count < 8){
        alert('비밀번호가 8자리 미만입니다.');
        return;
    }
    if( !confirm){
        alert('비밀번호를 확인하지 않았습니다.');
        return;
    }
    if(!(confirm == password))//(confirm != password){
        alert('비밀번호가 맞지 않습니다.')
        return;
    }

    alert('회원가입을 축하합니다');
});