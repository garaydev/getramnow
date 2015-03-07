/*

Writted and maintained by Annie!

*/
$(document).ready(function () {
    
    
    //constructor function for UserSelections Object, UserSelections Object to hold options selected
    function UserSelections(ramSelected,browserSelected){
        this.ramSelected=ramSelected;
        this.browserSelected=browserSelected;
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
            TotalRAM = Number(convertVal);
            return TotalRAM;
        }
        else{
            return RAMDefault;
        }
    }
    
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
        if(userBrowser === 'Other'){
           $('#done').append('<h1> Yeah! You just used a strange browser to download ' + userRAM + ' of RAM! Nice! </h1>'); 
        }
        else{
           $('#done').append('<h1> Yeah! You just used ' + userBrowser + ' to download ' + userRAM + ' of RAM! Congrats! </h1>'); 
        }
    }
    
    //return DL process message
    function DLProcess()
    {
      // Create Quotes Array
      var processMsgs = [];

      // The List of Quotes!
      processMsgs[0] = "Initializing core system drivers...";
      processMsgs[1] = "Checking Kernel for compatibility...";
      processMsgs[2] = "Verifying size of Swap File...";
      processMsgs[3] = "Preparing real-time DRAM installation...";
      processMsgs[4] = "Applying voltage to transistor gates...";
      processMsgs[5] = "Recalculating of IC Cells...";
      processMsgs[6] = "Choosing between subthreshold and weak-inversion modes...";
      processMsgs[7] = "Overcoming velocity saturation...";
      processMsgs[8] = "Inventing MOSFET before Bell Labs...";
      processMsgs[9] = "Synthesizing the human genome...";

      // Assign the Variable "quote" with a Random Quotation from Above

      var quote = processMsgs[Math.floor(Math.random() * processMsgs.length)];

      // Alter the Current (Default) Quote Text with a Random Quote
      $('#proMessages').text(quote);   
    }
    
    //init hidden elements
    var resetBtn = $('.btn.btn-warning.resetButton:eq(0)');
    
    //init progress bar
    var $pbram = $('.progress .progress-bar');
    $pbram.data('paused',true);
    //click download RAM button
    $('#h-fill-animation-start').click(function() {
        if($pbram.hasClass('six-sec-ease-in-out') == false){
            $pbram.addClass('six-sec-ease-in-out');
        }
        if($pbram.data('paused')){
            $pbram.data('paused',false);
            $pbram.attr('data-transitiongoal',$pbram.attr('data-transitiongoal-backup'));
            $('#h-fill-animation-start').removeClass('btn-primary');
            $('#h-fill-animation-start').addClass('btn-danger');
            $('#h-fill-animation-start').html('Pause?');
            $('#h-fill-animation-start').removeClass('hvr-float-shadow');
            
        }
        else{
            $pbram.data('paused',true);
            $('#h-fill-animation-start').removeClass('btn-danger');
            $('#h-fill-animation-start').addClass('btn-primary');
            $('#h-fill-animation-start').html('Resume Download!');
            $('#h-fill-animation-start').addClass('hvr-float-shadow');
        }
            
        if($pbram.attr('data-transitiongoal') == 0){
            $pbram.attr('data-transitiongoal',100);
            $('.progress .progress-bar').addClass('six-sec-ease-in-out');
            $pbram.addClass('progress-bar-success');
            $pbram.removeClass('progress-bar-info');
            
        }
        //disable previous steps
        $('ul.setup-panel li:eq(0)').addClass('disabled');
        $('ul.setup-panel li:eq(1)').addClass('disabled');
        //add data-trans attr
        
        //process bar init'
        if($pbram.data('paused') == false){
        $pbram.progressbar({
        //display_text: 'fill',
        transition_delay: 1500,
        refresh_speed: 500,
        update: function(current_percentage, total) {
                                if (current_percentage > 0)
                                    $('#update').html(current_percentage);
                                if( current_percentage > 5 && current_percentage%5 === 0 && current_percentage < 90){
                                    DLProcess();
                                }
                                if (current_percentage >= 90 && current_percentage <= 99){
                                    $('#proMessages').text('Almost Done.....');
                                }
                               
                            },
        done: function(){ if ($pbram.attr('data-transitiongoal') == 100){
                                $('#proMessages').text('');
                                $pbram.removeClass('progress-bar-success');
                                $pbram.addClass('progress-bar-info');
                                $('#h-fill-animation-start').addClass('disabled');
                                if( !$.trim( $('#done').html() ).length ){
                                      BuildRAMBrowserText();
                                }
                                resetBtn.show();
                                $pbram.data('paused',true);
                                $('#h-fill-animation-start').removeClass('btn-danger');
                                $('#h-fill-animation-start').addClass('btn-success');
                                $('#h-fill-animation-start').html('Success!');
                           }
                        } //done done!
    });
    }   
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
        $(this).hide();
    });
    
    $('#activate-step-3').on('click', function(e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $(this).hide();
    });
    
    //Reset RAM Download Wizard
    
    $('#resetRAMDL').click(function(){
    vex.dialog.confirm({
        message: 'Do you want to reselect your RAM?',
        callback: function(value) {
         if(value){
            $('#resetRAMDL').hide();
            $('.progress .progress-bar').attr('data-transitiongoal',0).progressbar({display_text:'center'});
            $pbram.addClass('progress-bar-success');
            $pbram.removeClass('progress-bar-info');
            $('#done').empty();
            $('#update').empty();
            $('#proMessages').empty();
            $('ul.setup-panel li:eq(0)').removeClass('disabled');
            $('ul.setup-panel li:eq(2)').addClass('disabled');
            $('#activate-step-2').show();
            $('#activate-step-3').show();
            $('.progress .progress-bar').removeClass('six-sec-ease-in-out');
            $('#h-fill-animation-start').removeClass('disabled');
            $('ul.setup-panel li a[href="#step-1"]').trigger('click');
            $('#h-fill-animation-start').removeClass('btn-danger');
            $('#h-fill-animation-start').removeClass('btn-success');
            $('#h-fill-animation-start').addClass('btn-primary');
            $('#h-fill-animation-start').html('Download!');
            $('#h-fill-animation-start').addClass('DLInitClick');
             
         }
         else{
             return false;
         }
        }
    });
});

        
});