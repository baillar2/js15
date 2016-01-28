

angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', function($scope){
		$scope.day = []
		$scope.week = [[], [],[]]
		$scope.app = {}
		$scope.week.push($scope.day)
		document.addEventListener("scroll", function(event){
				$scope.$apply(function(){
				$scope.week.push([])
				console.log(event)
			})	
			console.log('scroll worked')
		})
		//$scope.scroll = function () {
		//	$scope.week.push($scope.day)	
		//	console.log('scroll worked')
//
		$scope.showInput = function() {
			$scope.dayInput = true
		}
		$scope.hide = function(){
			$scope.dayInput = false
			console.log('blur works')
		}
		$scope.submit = function ($event) {
			$scope.day.push($scope.app)
			$scope.app = {}
			$scope.list = true
			$scope.dayInput = false
			
		}

		$scope.edit = function (app) {
			app.showEdit = true
		}
		$scope.editInfo = function (app) {
			app.showEdit = false
		}

	
	}])








