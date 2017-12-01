app.controller('MainController', function($scope, $http) {
	/*$scope.rssData = APIData.getRSSFeeds;
	console.log($scope.rssData);*/
	
	$http.get('/news/all').then(function(response) {
		var data = response.data;
		console.log(data);
		$scope.rssData = data;
	});
	
});