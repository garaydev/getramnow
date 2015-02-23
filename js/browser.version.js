/*

Writted and maintained by Annie!

*/
$(document).ready(function(){

    //get browser info
    var browser=get_browser_info();
    //remove active Browser class from spans
    $('.browSel span').removeClass('activeFS1');
    //modify Browser Selection to suggested browser
    if(browser != null){
        if(browser.name == 'Firefox'){
            $('#browserSel').find('.icon-fx').addClass('activeFS1');
        }
        else if (browser.name == 'Chrome'){
            $('#browserSel').find('.icon-chrome').addClass('activeFS1');
        }
        else{
            $('#browserSel').find('.icon-other').addClass('activeFS1');
        }
    }       
    
});
//getBrowserInfo function
function get_browser_info(){
        
        var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
        if(/trident/i.test(M[1])){
            tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
            return 'IE '+(tem[1]||'');
            }   
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR\/(\d+)/)
            if(tem!=null)   {return 'Opera '+tem[1];}
            }   
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        return {
          name: M[0],
          version: M[1]
        };
     }