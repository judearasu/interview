angular.module('app.posts').controller('postCtrl', postCtrl);
postCtrl.$inject = [];

function postCtrl() {
    var vm = this;
    console.log('hello');
}
