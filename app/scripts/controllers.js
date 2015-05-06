// vineApp CONTROLLERS
vineApp.controller('homeController', ['$scope', 'vineService', function($scope, vineService) {
    
     $scope.popularFeedResult = vineService.GetPopular();
  
}]);


vineApp.controller('popularController', ['$scope', 'vineService', function($scope, vineService) {
    
    $scope.popularFeedResult = vineService.GetPopular();
  
}]);


vineApp.controller('tagController', ['$scope', '$routeParams', '$location', 'vineService', function($scope, $routeParams, $location, vineService ) {
    
  $scope.hashtag = $routeParams.tag;
  
  $scope.submit = function() {
    $location.path("/hashtag/" + $scope.hashtag);
  };
  
  $scope.hashtagFeedResult = vineService.GetHashtag($scope.hashtag);
  
  console.log($scope.hashtagFeedResult);
    
}]);

vineApp.controller('apiResultController', ['$scope', 'vineService', function($scope, vineService) {
    
    $scope.popularFeedResult = vineService.GetPopular();
  
}]);

