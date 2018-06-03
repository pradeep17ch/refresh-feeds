//angular code for fetching feeds through http request
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope, $http, $interval){

	var getData = function() {
		$http
			.get("/getData")
			.then(function(response) {
				$scope.data = response.data;
			})
	};

	getData();
	$interval(getData, 10000);
});
