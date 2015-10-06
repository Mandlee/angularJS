'use strict';

var authModule = angular.module('authModule', [
]);

authModule.config(function ($httpProvider, $sceProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $sceProvider.enabled(false);

});

authModule.run(function ($rootScope) {
    console.log('Auth Module Init');

});