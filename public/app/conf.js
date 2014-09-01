(function(){
    angular
        .module('AngularRESTClient')
        .config(function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider
                .when('/', '/home')
                .otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/contactList.html',
                    controller: 'ContactTableCtrl',
                    controllerAs: 'contact',
                    resolve: ContactTableCtrl.resolve
                })

                .state('about', {
                    url: '/about',
                    templateUrl: 'views/view-about.html'
                })

                .state('create', {
                    url: '/create',
                    templateUrl: 'views/create.html',
                    controller: 'ContactTableCtrl',
                    controllerAs: 'contact'
                })
        });
})();