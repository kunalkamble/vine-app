'use strict';

// DIRECTIVES
vineApp.directive("vinePopular", function() {
   return {
       restrict: 'E',
       templateUrl: 'views/popular.html',
       replace: true,
       scope: {
         vineFeed: '='
       }
   }
});

vineApp.directive("vineVideoPlayer", function() {
   return {
       restrict: 'E',
       templateUrl: 'views/videoPlayer.html',
       replace: true,
       scope: {
         videoUrl: '@',
         videoHeight: '@',
         videoWidth: '@'
       }
   }
});

vineApp.directive('iframeVineVideo', ['$sce', function($sce) {
  return {
    restrict: 'E',
    template: '<iframe src="{{ trustedUrl }}" frameborder="0" allowfullscreen></iframe>',
    link: function(scope) {
      scope.trustedUrl = $sce.trustAsResourceUrl(scope.vineFeed.shareUrl+"/embed/postcard");
    }
  }
}]);