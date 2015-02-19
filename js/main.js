/*

Writted and maintained by Annie!

*/
$(document).ready(function(){
    
    $("#downloadBar").hide();
    
     //spyscroll
    $('body').scrollspy({ target: '.navbar-collapse' });
    
    //owl
     $("#owl-example").owlCarousel({
autoPlay: 7000, //Set AutoPlay to 7 seconds
singleItem:true
 
});
    
    //navigation animation code
        $('.navs a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    ( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );
		
    
var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#menuTop',
	offset: navHeight
});
   
    //remove collapse for navbar-bar when clicked
    $(function() {
        $('.nav a').on('click', function(){ 
            if($('.navbar-toggle').css('display') !='none'){
                $(".navbar-toggle").trigger( "click" );
            }
        });
    });
    

    //click download RAM button
    $('#h-fill-animation-start').click(function() {
    $('.progress .progress-bar').progressbar({
        display_text: 'fill',
        transition_delay: 1000,
        done: function(){ $('#done').append('<h1> Yeah! You just downloaded RAM</h1>');
                          $('#downloadBarSub').removeClass('progress-bar-success');
                          $('#downloadBarSub').addClass('progress-bar-info')
                          
                        }
    });
    $('#downloadBar').slideDown( "slow" );
   });
    
    
});

