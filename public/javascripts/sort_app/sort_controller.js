(function() {
	'use strict';

	angular.module('sortApp', [])
		.controller('sortCont', sortCont);

	function sortCont(sortService) {

		var vm = this;
		vm.list1 = [];
		vm.list2 = [];

		sortService.getLists()
			.then(function(res) {
				angular.forEach(res.data.list1, function(item) {
					vm.list1.push(item);
				});
				angular.forEach(res.data.list2, function(item) {
					vm.list2.push(item)
				});
			}, error);

		vm.addItem = function(str) {
	    vm.list1.push({name: str})
	    console.log(vm.list1)
	  }

		function error (err) {
			console.log(err);
		}
	}
}());