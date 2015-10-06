'use strict';

var coreModule = angular.module('coreModule', [
]);

coreModule.config(function ($httpProvider, $sceProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $sceProvider.enabled(false);

    //$httpProvider.interceptors.push('ErrorInterceptorService');

});

coreModule.run(function ($rootScope) {
    console.log('Core Module Init');

});