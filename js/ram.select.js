/*

Writted and maintained by Annie!

*/
$(document).ready(function(){
    
$(".btn-group > .btn.ramSel").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
    
$("button > .fs1.browSel").click(function(){
    $(".btn>span.fs1.browSel").removeClass("activeFS1");
    $(this).addClass("activeFS1");
});
    
});