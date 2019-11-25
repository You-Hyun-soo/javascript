// 반복문

var num = 10;
num = 20; // 재정의

//console.log(num);

num = num + 10;
num = num + 10;
num+=10; // 위와 동일한 연산
num++; // 1증가 -> 사용후 증가
num--; // 1감소 -> 사용후 감소
++num; // 1증가 -> 사용시 증가
--num; // 1감소 -> 사용시 감소

// 라인단위로 처리한다. 값이 계속 변화한다.
//console.log(++num);
//console.log(num);

// 반복문
// 기능을 여러번 반복한다.
// for(초기값; 조건; 증감){ 초기값을 시작으로 조건이 참일경우 실행 }

// for( var i = 100; i <= 1000; i+=100){
//     console.log('반복');
// }

// for(var i =10; i > 0; i--) {
//     console.log(i);
// }

// console.log(i); // 10으로 표시 위의 모든 반복을 끝내고 난 후의 결과값

// 중첩 for문
//  for(var j = 0; j < 10; j++ ){

//      for(var k = 0; k < 5; k++){
//          console.log('박수5번');
//      }

//      console.log('왕복했음');
//  }

//왕복을 하는데 1번 왕복을 할 때마다 박수를 첫왕복에선 한번 두번째 왕복에선 2번 
// 박수 1 + 왕복 -> 박수 2 + 왕복 -> 박수 3 + 왕복 ... 박수 10 + 왕복(10회)

//var n1 = 1;

// for(var a = 0; a < 10; a++ ){

//     for(var b =0; b < a+1; b++){
//         console.log('박수');
//     }

//     //n1++;
//     console.log('왕복');
// }

//var VS let
// let a = 10;
// let a = 10;

// var == 함수단위 변수 블럭밖에서도 사용 가능하다
// let == 블럭단위 변수 {}(scope) 블럭안에서만 사용 가능하다 지역변수

// for( var h = 0; h < 10; h++){

//     let n2;
    
//     if ( h % 2 == 0) {
//         n2 = 100;
//         console.log(h);
//     }
//     console.log(n2);   
// }


// 반복문을 종료하고 싶을 때
// break,continue
// break => 종료
// continue => 다음으로 넘김
// for(let z = 0; z < 10; z++){

//     if( z % 2 == 1){
//         //break;
//         continue;
//     }
//     console.log(z);
    
// }
//const는 사용할 수 없다 상수이기 때문에
// console.log('마지막 h의 값은' + h);
// console.log('마지막 z의 값은' + z);

// while, do while (for문과 동일) // for each, for in (객체배열에서 사용되는 반복문)
// while(조건){}
var open = 10;
while(open < 10){
    console.log(open);
    open++;;
}
//조건이 맞지 않으면 표시되지 않는다. 선조건

var close = 10;
do{
    console.log(close);
    close++;
} while( close < 10);
// 무조건 실행 시키고 조건을 본다. 선실행