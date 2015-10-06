/**
 * Created by aramiszrobert on 15. 02. 27..
 */

function randomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getListSeparator() {
    var list = ['a', 'b'];
    return(list.toLocaleString().charAt(1));
}

var logger = function()
{
    var oldConsoleLog = null;
    var pub = {};

    pub.enableLogger =  function enableLogger()
    {
        if(oldConsoleLog == null)
            return;

        window['console']['log'] = oldConsoleLog;
    };

    pub.disableLogger = function disableLogger()
    {
        oldConsoleLog = console;
        window['console']['log'] = function() {};
        window['console']['info'] = function() {};
        window['console']['group'] = function() {};
        window['console']['groupEnd'] = function() {};
    };

    return pub;
}();


function whichAnimationEvent(){
    var t,
        el = document.createElement("fakeelement");

    var animations = {
        "animation"      : "animationend",
        "OAnimation"     : "oAnimationEnd",
        "MozAnimation"   : "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
        if (el.style[t] !== undefined){
            return animations[t];
        }
    }
}