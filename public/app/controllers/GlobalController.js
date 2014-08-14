angular.module('AngularRESTClient', [])

.controller('GlobalCtrl', function($scope) {
        $scope.randomData = [
            {name:"first", value:"first value"},
            {name:"second", value:"second value"},
            {name:"third", value:"third value"}
        ];


    });