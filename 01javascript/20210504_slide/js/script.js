$(document).ready(function(){
// $(".wrapper li").eq(0).animate({left:"-100%"},1000);
//  시작..  0은현재의위치값 1은 그 다음 플라스.. 처리..-기본개념이래요
//$(".wrapper li").eq(1).animate({left:0},1000);  
let current = 0;
  const banner = $(".wrapper li");
console.log(current);    
function slider(){           // 0 1 2 3 4 
 banner.eq(current).css("left",0).stop().animate({left:"-100%"},1000);   
 current++;
 if(current == 5){current=0}
  banner.eq(current).css("left","100%").stop().animate({left:0},1000);   
//    console.log밖에있어야 0부터찍혀여...안에있기때문에...1부터찍힘여..
//console.log(current)
}
    
 setInterval (slider,3000); 
});