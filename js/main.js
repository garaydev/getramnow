/*

Writted and maintained by @GarayDev

Version History:

Date                Comment                         Dev
__________________________________________________________________
08/??/2014  Created                             @GarayDev
01/04/2015  Added version comment secition      @GarayDev

*/
$(document).ready(function(){

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
	target: '#leftCol',
	offset: navHeight
});
    
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#small-bar-wrapper").toggleClass("toggled");
    });
   
    //remove collapse for navbar-bar when clicked
    $(function() {
        $('.nav a').on('click', function(){ 
            if($('.navbar-toggle').css('display') !='none'){
                $(".navbar-toggle").trigger( "click" );
            }
        });
    });
    
    $(function(){
     
        $(document).on( 'scroll', function(){
     
            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });
     
        $('.scroll-top-wrapper').on('click', scrollToTop);
    });
    
});

