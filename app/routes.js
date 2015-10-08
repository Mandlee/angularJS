/**
 * Created by aramisz on 2014.09.05..
 */
var vndrRoutes = angular.module('vndrRoutes', ['ui.router']);

vndrRoutes.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('index', {
            url: '',
            templateUrl: 'view/module/main/main-index.html'
        })
        .state('index2', {
            url: '/',
            templateUrl: 'view/module/main/main-index.html'
        })
        .state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'view/module/main/main-index.html'
        })
        .state('main.home', {
            url: '/home',
            templateUrl: 'view/module/main/home/home-index.html'
        })
        .state('main.about', {
            url: '/about',
            templateUrl: 'view/module/main/about/about-index.html'
        })
        .state('auth', {
            url: '/auth',
            abstract: true,
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
            url: '/forgot',
            templateUrl: 'view/module/auth/index/auth-forgot.html'
        });

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/error');
});

vndrRoutes.run(function ($rootScope, $state) {



});