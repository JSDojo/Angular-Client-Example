// Make sure to include the `ui.router` module as a dependency.
angular.module('AngularRESTClient')
    .config(
    [          '$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {

            /////////////////////////////
            // Redirects and Otherwise //
            /////////////////////////////

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider.otherwise('/somewhere');


            //////////////////////////
            // State Configurations //
            //////////////////////////

            // Use $stateProvider to configure your states.
            $stateProvider.state("somewhere",
                {url:'/somewhere',
                    template:'<div class="jumbotron"><h1>Somewhere</h1></div>'});
        }]);