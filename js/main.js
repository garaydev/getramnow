/*

Writted and maintained by Annie!

*/
$(document).ready(function(){
    
    $("#downloadBar").hide();
        
    
    //owl
     $("#owl-example").owlCarousel({
autoPlay: 7000, //Set AutoPlay to 7 seconds
singleItem:true
 
});
    
    //navigation animation code
//        $('.navs a[href*=#]:not([href=#])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//        || location.hostname == this.hostname) {
//
//            var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//               if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                }, 1000);
//                return false;
//            }
//        }
//    });
    
    //spyscroll
    $('body').scrollspy({ target: '.navbar-collapse' });
    
var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

       $body.scrollspy({
	target: '#menuTop',
	offset: navHeight
});
   


    //remove collapse for navbar-bar when clicked
    $(function() {
        $('#menuTop .nav a').on('click', function(){ 
            if($('.navbar-toggle').css('display') !='none'){
                $(".navbar-toggle").trigger( "click" );
            }
        });
    });
    
});

