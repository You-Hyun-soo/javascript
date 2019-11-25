// 객체와 배열
// JSON 데이터 -> HTTP 통신으로 대화할 때 쓰는 데이터 수단
// android - java kotilin!
// apple - ob-c swift!
// web - php java node python

// 객체 -> object -> 정보의 집합
// 배열 -> array -> 정보의 순서

//window(객체).alert('나는 팝업');
// var aaaa = 100;
//window.aaaa= 100;
//console.log(window);

// 배열
// 순서가 존재하는 데이터 묶음
// 인덱스 index -> 0 부터 시작한다.
// [] 무조건 배열

//var arr = []; // 리터널 -> 보이는대로 // 권장하는 방법
// var arr = new Array();

var arr = [10, 20 ,30, 40 ,50]; // 하나의 배열값이 들어간 것
//var arr1 = [ 10, '문자', null, true, undefined, [], {}, functnion(){}];
// 배열에는 모든 값이 들어갈 수 있다.
// 배열은 0번째 부터

// var num1 = 10;

// console.log(arr.length);

// arr[7] = 100;

// console.log(arr.length); // 순서가 있기 때문에 앞에 2개의 공간은 빈 공간이 채워지게 된다.

// console.log(arr[7]);

//순서가 존재한다는건 맨앞과 맨뒤가 존재한다
var arr3 = [ 10, 20, 30, 40, 50];
// push, pop / 뒤 unshift, shift / 앞
arr3.push(100);//맨뒤로 들어간다.
arr3.push(50);
arr3.pop(); //맨뒤에 부터 뺀다.
arr3.pop();
arr3.unshift(100); //맨 앞으로 들어간다.
arr3.shift(); //맨 앞에서 부터 뺀다.
arr3.unshift(100);

//자료구조
//스택 와 큐 (stack queve) 무조건 공부해야 한다.
//스택 : 뒤에서부터 쌓아서 뒤에서 뺀다 push & pop : 브라우저 뒤로가기 / react에서 사용
//큐 : 뒤에서부터 쌓아서 앞에서 뺀다. push & shift : 채팅 , 순서대로 해야 할 일

// console.log(arr3);

//이차원
var arr4 = [[ 10, [20]] , [30, 40]];
var plue = arr4[0][1][0] + arr4[1][0];

// 반복문과 배열 조합

var arr5 = [ 90, 89, 95, 98, 76];
var total = 0;

for (var i = 0; i < arr5.length; i++){
    total = total + arr5[i];
}
    console.log(total);
    console.log(total/arr5.length);
