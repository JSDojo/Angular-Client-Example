(function(){
	var Contact = function($http, $q, $resource) {
		return $resource('/api/contacts/:id');
	}

	angular
		.module('AngularRESTClient')
		.factory('Contact', Contact);
})();
