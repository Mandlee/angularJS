/**
 * Created by aramisz on 2014.09.23..
 */
(function () {
    'use strict';

    coreModule.controller('CoreIndexController', CoreIndexController);

    CoreIndexController.$inject = ['$state'];

    function CoreIndexController($state) {
        var vm = this;

        vm.appConfig = appConfig;

        console.log('Init Core Controller');

        init();
        function init() {

        }

    }
})();