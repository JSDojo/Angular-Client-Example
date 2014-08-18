app.factory('Contacts', function($http) {
	var factory = {};

	factory.findAll = function(callback) {
		$http({
			url: 'http://localhost:3001/api/hc-contacts',
			method: 'GET'
		}).success(function(result) {
			callback(result)
		}).error(function(error){
			callback(false);
		});
	}

	factory.find = function(id, callback) {

	}

	factory.create = function(data, callback) {
		
	}
	
	factory.update = function(id, data, callback) {

	}
	
	factory.delete = function(id, callback) {

	}

	return factory;
});