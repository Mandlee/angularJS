/**
 * Created by aramisz on 2014.09.23..
 */
(function () {
    'use strict';

    mainModule.controller('MainIndexController', MainIndexController);

    MainIndexController.$inject = ['$rootScope', '$state'];

    function MainIndexController($rootScope, $state) {
        var vm = this;

        vm.user = {};
        vm.isAuth = false;

        console.log('Init Main Module');

        $rootScope.$on('MAIN::isAuth', function (event, value) {
            vm.isAuth = value;
        });

        $rootScope.$on('MAIN::user', function (event, value) {
            vm.user = value;
        });

        init();
        function init() {

        }

    }
})();