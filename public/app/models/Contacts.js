(function(){
	var Contact = function($http, $q) {
		this.findAll = function() {
			var deferred = $q.defer();

			$http({
				url: 'http://localhost:3001/api/contacts',
				method: 'GET'
			}).success(function(result) {
				deferred.resolve(result);
			}).error(function(error){
				deferred.reject(error);
			});

			return deferred.promise;
		}

		this.find = function(id) {
			var deferred = $q.defer();
			
			$http({
				url: 'http://localhost:3001/api/contact/' + id,
				method: 'GET'
			}).success(function(result) {
				deferred.resolve(result);
			}).error(function(error){
				deferred.reject(error);
			});

			return deferred.promise;
		}

		this.create = function(data) {
			var deferred = $q.defer();

			$http({
				url: 'http://localhost:3001/api/contacts',
				method: 'POST',
				data: data
			}).success(function(result) {
				deferred.resolve(result);
			}).error(function(error){
				deferred.reject(error);
			});	

			return deferred.promise;
		}
		
		this.update = function(id, data) {
			var deferred = $q.defer();

			deferred.resolve(true);

			return deferred.promise;
		}
		
		this.delete = function(contact) {
			var deferred = $q.defer();
			var position = vm.contactsList.indexOf(contact);

			$http({
				url: 'http://localhost:3001/api/contact/' + contact._id,
				method: 'DELETE'
			}).success(function(result) {
				vm.contactsList.splice(position, 1);
				deferred.resolve(result);
			}).error(function(error){
				deferred.reject(error);
			});	

			return deferred.promise;
		}
	}

	angular
		.module('AngularRESTClient')
		.service('Contact', Contact);
})();
