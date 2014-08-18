app. service('Contacts', function($http) {
	this.findAll = function(callback) {
		$http({
			url: 'http://localhost:3001/api/hc-contacts',
			method: 'GET'
		}).success(function(result) {
			callback(result)
		}).error(function(error){
			callback(false);
		});
	}

	this.find = function(id, callback) {

	}

	this.create = function(data, callback) {
		
	}
	
	this.update = function(id, data, callback) {

	}
	
	this.delete = function(id, callback) {

	}
});