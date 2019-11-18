function popup(){
    alert('팝업');
}
// 권장하지 않은 방법입니다. 표준에 맞게 사용해주세요.
document.querySelector('.box4').onclick = function(){
    alert('팝업');
}

// 권장하는 방법 -> 검색 & 경험
// IE8에서 동작을 하지 않음 -> 신경을 쓰지 않는다.
document.querySelector('.box5').addEventListener('click',function(){
    alert('팝업');
});

// jQuery (라이브러리)
$('.box6').on('click',function(){
    alert('팝업');
});