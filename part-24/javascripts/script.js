/*
    1. css로 구현
    2. javascript 를 사용해서 슬라이드 구현
    3. 제이쿼리를 이용한 슬라이드 구현
    4. 플러그인을 이용한 슬라이드 구현
*/

/*
    setInterval 시작
    clearInterval 멈추게 한다.
 */

var doc = document;
var next = doc.getElementById('next');
var prev = doc.getElementById('prev');
var item = doc.getElementById('item');
var slider = doc.getElementById('slider');
var pager = doc.getElementById('page').getElementsByTagName('div');
var play = doc.getElementById('play');
var stop = doc.getElementById('stop');
var auto = null;
console.log(pager[0]);
console.log(pager[0].className);
console.log(pager);

var itemPos = 0; // 실제 움직일 변수
var endPos = 0; // 이동해야하는 거리
var licount = item.getElementsByTagName('li').length;; // 실제 슬라이드 될 태그의 개수
var distance = slider.offsetWidth - 10;// 슬라이드 넓이 동시에 움직이는 거리
var last = distance * (licount - 1);
var speed = 10;
console.log(pager.length);
// var n = 0;
// var i = 0;
var idx = 0;
next.addEventListener('click',moveNext);

function moveNext(){    // -700, -1400, -2100, -2800
    //itemPos = itemPos - 700; // 이동해야하는 거리
    // n++;
    endPos = endPos - distance;

    if( endPos < -last  ) { // 마지막인가?
        idx = 0;
        endPos = 0;
        var ani = setInterval(function(){
            if( itemPos >= 0){
                // setInterval을 멈추게 해야 한다.
                clearInterval(ani);
                pager[0].classList.add('active');
                pager[pager.length - 1].classList.remove('active');
                // console.log(n);
                // console.log(i);
                // if( n == pager.length) {
                //     pager[(pager.length - 1)].classList.remove('active');
                //     pager[0].classList.add('active');
                // };
                // if( n > (pager.length - 1)){
                //     return n = 0;
                // };
                
                return;
            };
            itemPos = itemPos + speed;
            item.style.transform = 'translateX(' +  itemPos +'px)'

            // for ( var i = 1; i <itemChild; i++){

            
        }, 10);
    } else{
        idx++;

        var ani = setInterval(function(){
            if( itemPos <= endPos){
                // setInterval을 멈추게 해야 한다.
                clearInterval(ani);
                pager[idx].classList.add('active');
                pager[idx-1].classList.remove('active');
                // if( n > i ){
                //    pager[n].classList.add('active');
                //    pager[i].classList.remove('active');
                // };
                // while( n > i){
                //     i++
                //     if( i > (pager.length - 2)){
                //         return i = 0;
                //     };
                    
                // };           
                return;
            };
            itemPos = itemPos - speed;
            item.style.transform = 'translateX(' +  itemPos +'px)'
            // for ( var i = 1; i <itemChild; i++){
           
            
        }, 10);
    };
    
    
    // if(itemPos < -2800){
    //     itemPos = 0;   
    // }
    
    
};


prev.addEventListener('click',function(){

    // if ( idx == 0 ) {
    //     return;
    // } 
    
    endPos = endPos + distance;
    
    if( idx == 0 ) {         
        idx = licount - 1;
        var ani = setInterval(function(){
            if( itemPos <= -last ){
                // setInterval을 멈추게 해야 한다.
                clearInterval(ani);
                endPos = -last;
                pager[pager.length - 1].classList.add('active');
                pager[0].classList.remove('active');
                // console.log(n);
                // console.log(i);
                // if( n == pager.length) {
                //     pager[(pager.length - 1)].classList.remove('active');
                //     pager[0].classList.add('active');
                // };
                // if( n > (pager.length - 1)){
                //     return n = 0;
                // };
                
                return;
            };
            itemPos = itemPos - speed;
            item.style.transform = 'translateX(' +  itemPos +'px)'

            // for ( var i = 1; i <itemChild; i++){

            
        }, 10);
    } else{
        idx--;

        var ani = setInterval(function(){
            if( itemPos >= endPos ){
                // setInterval을 멈추게 해야 한다.
                clearInterval(ani);
                pager[idx].classList.add('active');
                pager[idx+1].classList.remove('active');
                // if( n > i ){
                //    pager[n].classList.add('active');
                //    pager[i].classList.remove('active');
                // };
                // while( n > i){
                //     i++
                //     if( i > (pager.length - 2)){
                //         return i = 0;
                //     };
                    
                // };           
                return;
            };
            itemPos = itemPos + speed;
            item.style.transform = 'translateX(' +  itemPos +'px)'
            // for ( var i = 1; i <itemChild; i++){
           
            
        }, 10);
    };
    
});

play.addEventListener('click',function(){
    clearInterval(auto);
    auto = setInterval(moveNext,5000);
});

stop.addEventListener('click',function(){
    clearInterval(auto);
});
// 주의사항 버튼을 누를 때마다 setInterval이 중첩되는 현상이 발생하게 된다.
// clearInterval을 앞에 배치해서 이를 멈추게 한다.