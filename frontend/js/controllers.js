// PostsCtrl (index)
function PostsCtrl($scope, $http) {
  $http.get('data/metadata.json').success(function(data) {
    $scope.posts = data;
  });
};
PostsCtrl.$inject = ['$scope', '$http'];

// PostCtrl (show)
function PostCtrl($scope, $http, $routeParams) {
  var dataPath = 'data/' + $routeParams.postPath + '.json';
  
  $http.get(dataPath).success(function(data) {
    $scope.post = data;
  });
};
PostCtrl.$inject = ['$scope', '$http', '$routeParams'];