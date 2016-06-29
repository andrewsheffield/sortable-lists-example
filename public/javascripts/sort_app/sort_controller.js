(function() {
	'use strict';

	angular.module('sortApp', [])
		.controller('sortCont', sortCont);

	function sortCont(sortService) {

		var vm = this;
		vm.lists = {
			list1: [
				{
					name: "Sheff",
					order: 0
				},
				{
					name: "Abi",
					order: 1
				}
			],
			list2: [
				{
					name: "Kim",
					order: 0
				}
			]
		};



		function init() {
			sortService.getLists()
				.then(function(res) {
					vm.lists = res.data;
					vm.lists.list1.push({ name: "sue", order: 2})
					console.log(vm.lists);
				}, error);
		}
		init();

		function error (err) {
			console.log(err);
		}
	}
}());