(function() {
    angular.module('app.posts')
        .directive('postComp', postComp);

    function postComp() {
        var directive = {
          link: link,
          controller: 'postCtrl',
          controllerAs: 'post',
          restrict: 'EA',
          templateUrl: 'app/views/components/posts/posts.html'
        };

        return directive;
        function link(scope, element, attrs, post){

        }
    }
})();
