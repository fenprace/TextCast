// PostsCtrl (index)
function PostsCtrl($scope, $http) {
  $http.get('data/metadata.json').success(function(data) {
    $scope.posts = data;
  });
};
PostsCtrl.$inject = ['$scope', '$http'];

// PostCtrl (show)
function PostCtrl($scope, $http, $routeParams) {
  var dataUrl = 'data/' + $routeParams.postUrl + '.json';
  
  $http.get(dataUrl).success(function(data) {
    $scope.post = data;
  });
};
PostCtrl.$inject = ['$scope', '$http', '$routeParams'];