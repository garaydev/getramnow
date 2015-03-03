$(document).ready(function(){

//init dlbutton
$dlbutton = $('#h-fill-animation-start');

//init default RAM options
var gaRAMselection = "Unknown";
var gaBROWselection = "Unknown";

$dlbutton.on('click', function(){ 
            //get selected RAM options
            var gaRAMselection = $('.btn-group > a.btn.ramSel.active').text();
            var gaBROWselection = $('.activeFS1').first().parent().first().parent().text();
            var ramBrowConCat = gaRAMselection + ' ' + gaBROWselection; 
            // don't open the link yet
            event.preventDefault(); 
            // when someone clicks this button link
            if ($dlbutton.hasClass('DLInitClick')) {
                $dlbutton.removeClass('DLInitClick');
                //push DL button click event to GA
                _gaq.push(['_trackEvent', 'Products', 'Download', 'RAM Downloaded']);
                _gaq.push(['_trackEvent', 'Products', 'Download', 'RAM Downloaded', ramBrowConCat ]);
                //remove initclick class for DL button.
            }
            
        });
    });
    
