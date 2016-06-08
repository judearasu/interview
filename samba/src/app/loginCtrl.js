(function() {
	angular.module('myApp').controller('LoginCtrl', LoginCtrl);
	LoginCtrl.$inject = ['$location'];

	function LoginCtrl($location) {
		var vm = this;
		vm.title = "LoginPage";
		vm.username = "";
		vm.password = "";
		vm.navigateToHome = navigateToHome;

		function navigateToHome() {
			if (vm.username === "Samba" && vm.password === "test123") {
				$location.path('/home');
			} else {
				$location.path('/');
			}
		}

	}
})();
