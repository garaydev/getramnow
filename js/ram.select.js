/*

Writted and maintained by Annie!

*/
$(document).ready(function(){
        
    //click download RAM button
    $('#h-fill-animation-start').click(function() {
    $('.progress .progress-bar').progressbar({
        display_text: 'fill',
        transition_delay: 1500,
        done: function(){ $('#downloadBarSub').removeClass('progress-bar-success');
                          $('#downloadBarSub').addClass('progress-bar-info');
                          $('#h-fill-animation-start').addClass('disabled');
                          getRamBrowserSelects();
                        }
    });
    $('#downloadBar').slideDown( "slow" );
   });


    $(".btn-group > .btn.ramSel").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("#activate-step-2").removeClass("disabled");
    });

    $('.browSel').click(function(){
        $('.browSel span').removeClass('activeFS1');
        $(this).find('.browSelIcon').addClass('activeFS1');
        $("#activate-step-3").removeClass("disabled");
    });

    /* Start of SetupWizard */
    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function(e)
    {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');
        
        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });
    
    $('ul.setup-panel li.active a').trigger('click');

    $('#activate-step-2').on('click', function(e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $(this).remove();
    });
    
    $('#activate-step-3').on('click', function(e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $(this).remove();
    });
    
    //get the selected RAM Amount and Browser
    function getRamBrowserSelects()
    {
        //get RAM amount
//        var ramVal = $('.btn-group > a.btn.ramSel.active').text();
//        var browserVal = $('.activeFS1').first().parent().first().parent().text();
//        return;
    }
    
    //get the selected RAM Amount and Browser
    function BuildRAMBrowserText()
    {
        //getRamBrowserSelects();
    }
    
});