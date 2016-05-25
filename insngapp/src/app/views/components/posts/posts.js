angular.module('app.posts').controller('postCtrl', postCtrl);
postCtrl.$inject = ['PostService'];

function postCtrl(PostService) {
	var vm = this;
	vm.init = init;
	vm.getPost = getPost;
	vm.thead = [{
		"name": "id",
		"value": "Id"
	}, {
		"name": "title",
		"value": "Title"
	}, {
		"name": "body",
		"value": "Body"
	}];
	vm.posts = [];

	function init() {
		vm.getPost();
	}

	function getPost() {
		PostService.getPosts.query(function(success) {
			vm.posts = success;
		}, function(error) {
			console.log(error);
		});
	}

}
