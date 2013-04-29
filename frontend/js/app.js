var TextCast = angular.module('TextCast', [])

// PostsCtrl (index)
TextCast.controller('PostsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/metadata.json').success(function(data) {
    $scope.posts = data;
  });
}]);


// PostCtrl (show)
TextCast.controller('PostCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  var dataUrl = 'data/' + $routeParams.postUrl + '.json';
  
  $http.get(dataUrl).success(function(data) {
    $scope.post = data;
  });
}]);

// Routes
TextCast.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/posts', {templateUrl: 'frontend/partials/posts.html', controller: 'PostsCtrl'}).
    when('/post/:postUrl', {templateUrl: 'frontend/partials/post.html', controller: 'PostCtrl'}).
    otherwise({redirectTo: '/posts'});
  }
]);