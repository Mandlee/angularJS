'use strict';

var mainModule = angular.module('mainModule', [
    //'jsonRPC',
    //'LocalStorageModule'
]);

mainModule.config(function ($httpProvider, $sceProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $sceProvider.enabled(false);

});

mainModule.run(function ($rootScope) {
    console.log('Main Module Init');

});