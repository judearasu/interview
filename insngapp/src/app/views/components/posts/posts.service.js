angular.module('app.posts').service('PostService', PostService);

PostService.$inject = ['$resource'];

function PostService($resource) {
    var service = this;
    service.getPosts = $resource('http://jsonplaceholder.typicode.com/posts');
}
