/**
 * Created by aramisz on 2014.09.23..
 */
(function () {
    'use strict';

    authModule.controller('AuthIndexController', AuthIndexController);

    AuthIndexController.$inject = ['$state'];

    function AuthIndexController($state) {
        var vm = this;

        vm.login = login;
        vm.logout = logout;
        vm.forgotPassword = forgotPassword;

        console.log('Init Auth Module');

        init();
        function init() {

        }
        
        function login(email, password) {

        }

        function logout() {

        }

        function forgotPassword(email) {

        }

    }
})();