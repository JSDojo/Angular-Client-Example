angular.module('AngularRESTClient')

    .config(['$stateProvider', '$urlRouterProvider'],
    function($stateProvider, $urlRouterProvider){

        $urlRouterProvider
            .when('/c?id', '/contacts/:id')
            .when('/user/:id', '/contacts/:id')
            .otherwise('/')
        ;

        $stateProvider
            .state('home', {
                url: '/',
                template:'<p class="lead">Welcome to the UI-Router Demo</p>' +
                    '<p>Use the menu above to navigate. ' +
                    'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
                    '<p>Click these links—<a href="#/c?id=1">Alice</a> or ' +
                    '<a href="#/user/42">Bob</a>—to see a url redirect in action.</p>'

            })
    }
)

;