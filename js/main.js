/*

Writted and maintained by Annie!

*/
$(document).ready(function(){
    
    //spyscroll
    $('body').scrollspy({ target: '.navbar-collapse' });
    
    var $body   = $(document.body);
    var owlReviews = $('#owlGRNreviews');
    var navHeight = $('.navbar').outerHeight(true) + 10;

           $body.scrollspy({
        target: '#menuTop',
        offset: navHeight
    });

    
    //owlCarousel code
     owlReviews.owlCarousel({
        autoPlay: 7000, //Set AutoPlay to 7 seconds
        singleItem:true
        });
    
    //remove collapse for navbar-bar when clicked
    $(function() {
        $('#menuTop .nav a').on('click', function(){ 
            if($('.navbar-toggle').css('display') !='none'){
                $(".navbar-toggle").trigger( "click" );
            }
        });
    });
    
    //checkVisible Function
    
    function checkVisible( elm, eval ) {
        eval = eval || "visible";
        var vpH = $(window).height(), // Viewport Height
            st = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();
    
        if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
        if (eval == "above") return ((y < (vpH + st)));
    }
    
    
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

    //init vex theme
    vex.defaultOptions.className = 'vex-theme-plain';

    //odometer check
    var $tDLs = $('#totalDLs');
    
    $(window).scroll(function() {
        if (checkVisible($('#totalDLs'))) {
            setTimeout(function(){
                $tDLs.html(16);
            }, 1000);
        } 
    });
    
    //odometer update TotalDLs
    
    //popovers for Wizard Setup options
    var allWSSteps = $('.WSSteps');
    
    allWSSteps.tooltip({
        trigger: "hover",
        delay: {show : 1000, hide : 0}
    });

    
});
