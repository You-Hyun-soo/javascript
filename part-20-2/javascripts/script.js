// 함수와 매개변수

/*

    함수 (상자의 가지수)

    1. 자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때 마다 호출한다.
    2. 함수내에 코드를 개선하면 이를 사용하는 모든 코드들이 개선이 된다.
    3. 코드 수정시 필요한 기능만을 빠르게 검색해서 찾을 수가 있다. (컴포넌트)
    4. 필요한 기능만을 제공하기 때문에 쓸데없는 낭비를 줄일 수 있다.
    5. 함수 -> 모듈

*/

// 함수 -> 데이터 -> 값
// 변수 = 값
// 변수 = 함수
/*
    function(기능을 수행하기 위한 필요데이터){
        기능을 수행한다.
    }

 */
nameFunc(); // 함수는 순서와 상관이 없다. 호출의 개념이기 때문
 function nameFunc(){
  //  console.log('나는 함수 입니다.');
 }

 //nameFunc();
 //nameFunc();

 var nonmae = function(){//익명함수 -> 이름이 없는 함수
    console.log('나는 익명함수입니다.');
 };
//nonmae(); // 변수의 값으로서 함수를 사용했을 경우에는 순서가 상관이 있다.
//권장하지 않는 방법 -> 이렇게 안쓰도록 하자.
// (function(){
//     console.log('나는 자체실행 함수입니다.')
// })();

// 함수의 종료
// 결과를 반환하는 시점
// return -> 함수는 리턴을 만나면 해당 함수를 종료시킨다.
// 리턴은 값을 반환한다.

function func1(){
    console.log('1');
    var b = 100;
    if (b < 100 ){
        return 10;
    }
    else {
        return 20;
    }
    return 10;
}
// var a = func1();
// console.log(a);

// 전역변수, 지역변수, 매개변수
// 호이스팅 현상

var p1 = 100; // 전역변수
window.p2 = 200; // 전역변수

function func2(){
    // var p1 = 200; // 지역변수 -> 함수내에 생성된 변수는 다른 함수에서 사용할 수 없다.
    // var p3 = 100;
    console.log(p1); // 호이스팅 -> 함수내에 선언된 변수는 자동으로 맨위로 끌어올려진다. undefined
    var p1 = 200;
   // console.log(p2);
}

function func3(){
    // console.log(p3);
    // console.log(p2);
}

// func2();
// func3();

// function -> var let

function func4(){

    let num = 10;
    let result = '';

    if (num > 5) {
        result = 'num 이 크다';
        console.log(result);
    } else {
        result = 'num 이 크다';
        console.log(result + '가 성립하지 않는다.');
    }
    console.log(result);
}

//func4();

// 매개변수 (파라미터)
// 더하는 기능을 만들어 보자.

function plus(n1=40,n2=70,n3=0) //함수에 사용하게 될 변수 초기값이 없으면 2개를 합할 때 nan이 표시된다.
{

    // var n1 = 40;
    // var n2 = 60;
    
    return n1 + n2 + n3;
}

var total1 = plus(100,200,300); //순서대로 값이 들어간다. 변수가 없을경우 받지 못한다.
var total2 = plus(400, 600);
// console.log(total1);

// 학급의 평균을 구하는 기능을 만들어라
var cls1 = [ 88, 76, 95, 80, 91, 79];
var cls2 = [ 79, 88, 98, 82, 88];

function avg(arr){
   
    var result=0; // 학급의 평균

    for ( var i = 0; i < arr.length; i++) {
        //result = result + arr[i];
        result+=arr[i];
    }
   
    return (result/arr.length).toFixed(2);
}

// console.log(avg(cls1));
// console.log(avg(cls2));

//es5 vs es6 함수 비교

function es5(number){
    return number * number;
}

console.log(es5(5));

// es6 함수 -> arrow function(화살표 함수)
// const es6 = number => number * number;
// const es6 = (number) => {
//     return number * number
// }
const es6 = number => number * number;

// 한개 일 때는 괄호 생략가능 두 개이상일 때는 괄호 반드시 필요
// 한줄로 끝날 때는 scope와 retrun 생략가능
/*

    () => {...} //기본
    (x) => {...} // 파라미터가 한개일때
    x => {...} // 파라미터가 한개일때는 괄호를 생략해도 된다.
    (x,y) => {...} // 파라미터가 2개이상일때는 괄호를 생략할 수 없다.

    x => {return x * x} // 라일을 작성할 때
    x => x * x // 함수가 한줄의 구문이면 괄호 생략을 할 수 있다. (암묵적 return)

    () => {
        const x;
        return x * x;
    }

*/
console.log(es6(5));

// var arr5 = [10, 20];

var f1 = function(){
    console.log(arguments);//파라미터를 배열로 받는다. 다만 arguments는 가급적 사용하지 않는다. 함수는 파라미터가 명확하게 표시되어 있어야 하기 때문
}

f1(10,20,30,40,50);

const f2 = (...arg) => {
    console.log(arg);
}
//es6에서 es5와 동일한 방식으로 파라미터를 배열로 받으면 에러가 뜬다.
f2(10,20,30,40,50);