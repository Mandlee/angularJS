'use strict';

var Browser = {};

(function () {
    var UA = navigator.userAgent;
    var html = document.documentElement;
    if (UA.indexOf('IEMobile') === -1) {
        if ((UA.indexOf('rv:11.') !== -1) && (!html.classList.contains('ie11')) && window.navigator.msPointerEnabled) {
            html.classList.add('ie11');
            html.classList.add('ie');
        } else if ((UA.indexOf('MSIE 10.') !== -1) && (!html.classList.contains('ie10')) && window.navigator.msPointerEnabled) {
            html.classList.add('ie10');
            html.classList.add('ie');
        } else if ((UA.indexOf('MSIE 9.') !== -1)) {
            html.className += ' ie ie9';
        } else if ((UA.indexOf("compatible; MSIE 7.") !== -1)) {
            html.className += ' ie ie9 compatible';
        } else if ((UA.indexOf("MSIE") !== -1)) {
            html.className += ' ie';
        }
    }

    if (UA.match(/iPad/i) !== null) {
        html.classList.add('iPad');
    }
    else if (UA.match(/iPhone/i) !== null) {
        html.classList.add('iPhone');
    }
    else {
        html.className += ' no-ipad';
    }

    if ((UA.indexOf("Chrome") !== -1)) {
        html.classList.add('chrome');
    }
    if ((UA.indexOf("Firefox") !== -1)) {
        html.classList.add('firefox');
    }

    var $html = $('html');
    Browser.isIE = $html.hasClass('ie');
    Browser.isIE9 = $html.hasClass('ie9');
    Browser.isIE10 = $html.hasClass('ie10');
    Browser.isIE11 = $html.hasClass('ie11');
    Browser.isIPad = $html.hasClass('iPad');
    Browser.isIPhone = $html.hasClass('iPhone');
    Browser.isChrome = $html.hasClass('chrome');
    Browser.isFirefox = $html.hasClass('firefox');

})();
