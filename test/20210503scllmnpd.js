$(document).ready(function(){
  const oneTop = $("#v01s").offset().top;
 const oneTwo = $("v02s").offset().top;    
 const oneThree = $("v03").offset().top;    
    
$(".menu > a").eq(0).on("click",function(){});
$(".menu > a").eq(0)."click"(function(){
 $("html,body").animate({scrollTop:oneTop})  
});
$(".menu>a").eq(1).click(function(){
 $("html,body").animate({scrollTop:oneTwo})  
}); 
    $(".menu>a").eq(2).click(function(){
 $("html,body").animate({scrollTop:oneThree})  
});   

    };
    
    