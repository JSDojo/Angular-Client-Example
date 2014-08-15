angular.module('AngularRESTClient', ['ui.router'])

    .config(function($urlRouterProvider, $stateProvider){
        console.log('hi');
        console.log($urlRouterProvider);
        console.log($stateProvider);

        $urlRouterProvider
            .when('/', '/home')
            .otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl:'views/contactList.html'
            })

            .state('about', {
                url:'/about',
                templateUrl: 'views/view-about.html'
            })
    });