(function() {
	'use strict';

	angular.module('sortApp')
	  .directive('sortableList', sortableList);

	function sortableList($interpolate) {
	  
	  var linkFunction = function(scope, element, attributes) {
	    var connectWithListDOM = $(document).find("[sortable-list='" + attributes.connectWith + "']");
	    var connectedWithList = scope.connectedWithList;
	    var listName = attributes.sortableList;
	    var list = scope.list;
	    var item = {};
	    var itemTemplate = element.html();
	    
	    function sortList(sortKey) {
	      var comparator = function(a, b) {
	        return a[sortKey] - b[sortKey];
	      }
	      list.sort(comparator);
	    }
	    
	    //Sorting the list by the sort key on init will allow
	    //Changes to the ordering to be made easier.
	    if (scope.orderBy) {
	      sortList(scope.orderBy)
	    }
	    
	    element.sortable({
	      connectWith: connectWithListDOM,
	      
	      start: function( event, ui ) {
	        var originIndex = $(ui.item).index();
	        $(ui.item).attr('originIndex', originIndex); //Set the origin index to the dom
	        $(ui.item).attr('originList', listName); //set the origin list name to the dom
	      },
	      
	      update: function( event, ui ) {
	        var originIndex = $(ui.item).attr('originIndex');
	        var originListName = $(ui.item).attr('originList');
	        var newIndex = ui.item.index();
	        var newListName = ui.item.parent().attr("sortable-List");
	        
	        //Checks if originating list to prevent duplication
	        //Action always taken by sending list
	        if (originListName === listName) {
	          //Update within the same list
	          if (originListName === newListName) {
	            item = list.splice(originIndex, 1);
	            list.splice(newIndex, 0, item[0]);
	            if (scope.orderBy) {
	              setNewOrder(originIndex, newIndex);
	            }
	            scope.$apply();
	          } 
	          //Update from this list to another
	          else {
	            item = list.splice(originIndex, 1);
	            connectedWithList.splice(newIndex, 0, item[0]);
	            if (scope.orderBy && originIndex != list.length) {
	              setNewOrder(originIndex, (list.length - 1));
	            }
	            scope.$apply();
	          }
	        }
	        //Action for receiving list
	        else {
	          if (scope.orderBy) {
	            setNewOrder(0, list.length - 1);
	          }
	        }

	        render();
	        
	      }//end of update function

	    });//end of sortable function
	    
	    function setNewOrder(oldIndex, newIndex) {
	      var min = Math.min(oldIndex, newIndex);
	      var max = Math.max(oldIndex, newIndex);

	      for (var i = min; i <= max; i++) {
	        list[i][scope.orderBy] = i;
	      }
	    }
	    
	    function render () {
	      element.html("");
	      var itemName;
	      if (scope.itemName) {
	        itemName = scope.itemName;
	      } else {
	        itemName = "item";
	      }

	      angular.forEach(list, function(value, key) {
	        scope[itemName] = value;
	        scope.$index = key;
	        var exp = $interpolate(itemTemplate)(scope);
	        element.append(exp)
	      });
	    }
	    
	    scope.$watch(function(scope) { return scope.list }, function() {
	     	render();
	    }, true);
	    
	    render();
	    
	  }//end of linkFunction
	  
	  
	  
	  return {
	    scope: {
	      list: "=sortableList",
	      connectedWithList: "=connectWith",
	      itemName: "@",
	      orderBy: "@"
	    },
	    link: linkFunction
	  }
	}

}());