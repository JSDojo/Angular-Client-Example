angular.module('AngularRESTClient')

    .controller('ContactTableCtrl', function($scope, $http){
        $scope.contacts = {};
        $http.get('http://localhost:3001/api/hc-contacts')
            .success(function(data, status, headers, config){
                $scope.contacts = data;
                console.log;
            })
            .error(function(data, status, headers, config){
                console.log('An error occured');
            });
    })
;