app.service('APIData' , function($http) {
	
	getRSSFeeds = function() {
		return $http.get('/news/all').then(function(response) {
			var data = response.data;
			return data;
		});
	}

	return {
		getRSSFeeds : getRSSFeeds,
	};
});