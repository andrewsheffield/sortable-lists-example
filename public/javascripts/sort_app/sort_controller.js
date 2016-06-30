(function() {
	'use strict';

	angular.module('sortApp', [])
		.controller('sortCont', sortCont);

	function sortCont(sortService, $scope) {

		var vm = this;
		vm.list1 = [];
		vm.list2 = [];

		function init() {
			sortService.getLists()
				.then(function(res) {
					angular.forEach(res.data.list1, function(item) {
						vm.list1.push(item);
					});
					angular.forEach(res.data.list2, function(item) {
						vm.list2.push(item)
					});
				}, error);
		}
		init();

		function updateLists() {
			var lists = {
				list1: vm.list1,
				list2: vm.list2
			}
			sortService.updateLists(lists)
				.then(function (res) {
					console.log(res);
				}, error)
		}

		$scope.$watch('vm.list1', function() {
			updateLists();
		}, true);

		$scope.$watch('vm.list2', function() {
			updateLists();
		}, true);


		function error (err) {
			console.log(err);
		}
	}
}());