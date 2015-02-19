/*

Writted and maintained by Annie!

*/
$(document).ready(function(){
    
$(".btn-group > .btn").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
    
});