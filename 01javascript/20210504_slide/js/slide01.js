$(document).ready(function () {
    //    $(".wrapper li").eq(0).animate({left:"-100%"},1000);
    //    $(".wrapper li").eq(1).animate({left:0},1000);

    let current = 0;
    //    현재의 값
    const banner = $(".wrapper li");

    function slider() {
        banner.eq(current).css("left", 0).stop().animate({
            left: "-100%"
        }, 1000);
        //        0으로있다가..100%
        current++;
        if (current == 5) {
            current = 0
        }  
        //        3초마다증가..
        //        console.log(current)
        banner.eq(current)
            .css({left: "100%",}).stop().animate({left: 0}, 1000);
        //        100%있다가 0으로 오는거...
        //        current += 1; 
    }
    setInterval(slider, 3000)
});
