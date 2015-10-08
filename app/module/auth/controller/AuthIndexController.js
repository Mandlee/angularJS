/**
 * Created by aramisz on 2014.09.23..
 */
(function () {
    'use strict';

    authModule.controller('AuthIndexController', AuthIndexController);

    AuthIndexController.$inject = ['$rootScope', '$state'];

    function AuthIndexController($rootScope, $state) {
        var vm = this;

        vm.login = login;
        vm.logout = logout;
        vm.forgotPassword = forgotPassword;
        vm.user = {};

        console.log('Init Auth Module');

        init();
        function init() {

        }
        
        function login(user) {
            var user = angular.copy(user);

            console.log('Login', user.email);

            $rootScope.$broadcast('MAIN::isAuth', true);
            $rootScope.$broadcast('MAIN::user', {
                name: user.email,
                email: user.email
            });

            $state.go('index');
        }

        function logout() {

        }

        function forgotPassword(email) {

        }

    }
})();