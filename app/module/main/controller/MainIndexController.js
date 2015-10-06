/**
 * Created by aramisz on 2014.09.23..
 */
(function () {
    'use strict';

    mainModule.controller('MainIndexController', MainIndexController);

    MainIndexController.$inject = ['$state'];

    function MainIndexController($state) {
        var vm = this;

        console.log('Init Main Module');

        init();
        function init() {

        }

    }
})();