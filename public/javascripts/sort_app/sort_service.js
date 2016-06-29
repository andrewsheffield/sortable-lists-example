(function() {
	'use strict';

	angular.module('sortApp')
		.service('sortService', sortService);

	function sortService($http) {
		this.getLists = function() {
			var path = '/lists';
			return $http({
				method: 'GET',
				url: path
			});
		}
		this.updateLists = function(lists) {
			var path = '/lists';
			return $http({
				method: 'PUT',
				url: path,
				data: lists
			});
		}
	}

}());