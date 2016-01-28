angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', function($scope){

		$scope.day = []
		$scope.showInput = function() {
			$scope.dayInput = true
		}
		$scope.showList = function () {
			$scope.list = true
		}


	}])

	// finish submit functin to push appointment into day[]
	// add if(keypress.event.key#13 == enter key){then submit} 
	// the data and trigger the ng-show on the list