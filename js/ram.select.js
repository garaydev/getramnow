/*

Writted and maintained by Annie!

*/
$(document).ready(function(){
    
    
    //constructor function for UserSelections Object, UserSelections Object to hold options selected
    function UserSelections(ramSelected,browserSelected){
        this.ramSelected=ramSelected;
        this.browserSelected=browserSelected;
    }

    //click download RAM button
    $('#h-fill-animation-start').click(function() {
        //disable previous steps
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        
    //process bar init
    $('.progress .progress-bar').progressbar({
        display_text: 'fill',
        transition_delay: 1500,
         update: function(current_percentage, total) { $('#update').html(current_percentage); },
        done: function(){ $('#downloadBarSub').removeClass('progress-bar-success');
                          $('#downloadBarSub').addClass('progress-bar-info');
                          $('#h-fill-animation-start').addClass('disabled');
                          BuildRAMBrowserText();
                        }
    });
    $('#downloadBar').slideDown( "slow" );
   });

    //activate selected RAM
    $(".btn-group > .btn.ramSel").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("#activate-step-2").removeClass("disabled");
    });

    //activate selected Browser
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
        var userChoices = new UserSelections();
        //set defaults
        userChoices.ramSelected = "Unknown";
        userChoices.browserSelected = "Unknown";
        //get actual selections
        var ramVal = $('.btn-group > a.btn.ramSel.active').text();
        if (ramVal) { userChoices.ramSelected = ramVal; }
        var browserVal = $('.activeFS1').first().parent().first().parent().text();
        if (browserVal) { userChoices.browserSelected = browserVal; }
        
        return userChoices;
    }
    
    //get the selected RAM Amount and Browser
    function BuildRAMBrowserText()
    {
        //set default memeber variables
        var userRAM;
        var userRAMTotal;
        var userBrowser;
        
        var userGetSelections = new UserSelections();
        userGetSelections = getRamBrowserSelects();
        
        if(userGetSelections.ramSelected){
            userRAM = userGetSelections.ramSelected;
            userRAMTotal = GetRamAmount(userGetSelections.ramSelected);
        }
        if(userGetSelections.browserSelected){
            userBrowser = userGetSelections.browserSelected;
        }
        if(userBrowser == 'Other'){
           $('#done').append('<h1> Yeah! You just used a strange browser to download ' + userRAM + ' of RAM! Nice! </h1>'); 
        }
        else{
           $('#done').append('<h1> Yeah! You just used ' + userBrowser + ' to download ' + userRAM + ' of RAM! Congrats! </h1>'); 
        }
       
        
        
    }
    
    //get total Amount of RAM selected
    function GetRamAmount(rSel)
    {
        //default to lowest available RAM
        var RAMDefault = 4;
        var TotalRAM = 4;
        
        var convertVal;
        //check before assignment
        var typeCheck = typeof rSel;
        if (typeCheck == "string"){
            convertVal = rSel.slice(0, rSel.indexOf('G'));
            TotalRAM = Number(convertVal)
            return TotalRAM;
        }
        else{
            return RAMDefault;
        }
    }
    
    
});