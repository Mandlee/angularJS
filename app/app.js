'use strict';

var vndrApp = angular.module('vndrApp', [
    'coreModule',
    'authModule',
    'mainModule',
    'vndrRoutes',
    //'jsonRPC',
    'LocalStorageModule'
    //'ui.bootstrap'
]);

vndrApp.config(function ($httpProvider, $sceProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $sceProvider.enabled(false);

    if (!appConfig.DEBUG.enable) {
        //logger.disableLogger();
    }

});

vndrApp.run(function ($rootScope) {
    console.log('APP RUN');

});