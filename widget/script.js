(function (window, document) {
    var loader = function () {
     var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
      script.src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js";
            tag.parentNode.insertBefore(script, tag);
        };
         window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
    })(window, document);
