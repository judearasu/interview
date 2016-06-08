(function() {
	angular.module('myApp').
	config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/login', {
				controller: 'LoginCtrl',
				templateUrl: 'login.html',
				controllerAs: 'log'
			})
			.when('/home', {
				// controller: 'HomeCtrl',
				templateUrl: 'home.html',
				// controllerAs: 'hm'
			})
			.otherwise({
				redirectTo: '/login'
			});

	});

})();
