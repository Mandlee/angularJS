/**
 * Created by aramisz on 2014.09.05..
 */
var vndrRoutes = angular.module('vndrRoutes', ['ui.router']);

vndrRoutes.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('index', {
            url: '',
            templateUrl: 'view/module/main/index/main-index.html'
        })
        .state('index2', {
            url: '/',
            templateUrl: 'view/module/main/index/main-index.html'
        })
        //.state('error', {
        //    url: '/error',
        //    templateUrl: 'view/other/error.html'
        //})
        .state('auth', {
            url: '/auth',
            templateUrl: 'view/module/auth/index/auth-index.html'
        })
        .state('auth.login', {
            url: '/login',
            templateUrl: 'view/module/auth/index/auth-login.html'
        })
        .state('auth.logout', {
            url: '/logout',
            templateUrl: 'view/module/auth/index/auth-logout.html'
        })
        .state('auth.forgot', {
            url: '/login',
            templateUrl: 'view/module/auth/index/auth-forgot.html'
        });

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/error');
});

vndrRoutes.run(function ($rootScope, $state) {



});