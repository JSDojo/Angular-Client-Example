app.controller('GlobalCtrl', function($scope, Contacts) {
    $scope.randomData = [];

	init();

    function init () {
    	Contacts.findAll(function(contacts) {
			$scope.randomData = contacts;
    	});
    }

});