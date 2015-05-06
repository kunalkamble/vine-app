// vineApp SERVICES

vineApp.service('vineService', ['$resource', function($resource) {
  this.GetPopular = function() {
      var vineAPI = $resource("https://community-vineapp.p.mashape.com/timelines/popular", 
                              { callback: "JSON_CALLBACK" }, { get: { method: "GET" } });
      return vineResult = vineAPI.get();
  };

  this.GetHashtag = function(hashtag) {
      var vineAPI = $resource("https://community-vineapp.p.mashape.com/timelines/tags/"+hashtag, 
                              { callback: "JSON_CALLBACK" }, { get: { method: "GET" } });
      return vineTagResult = vineAPI.get();
  };

}]);


// hashtag SERVICE
vineApp.service('hashtagService', ['$resource', function($resource) {
  this.tag = 'funny';
}]);
