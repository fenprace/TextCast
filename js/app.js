angular.module('wavecho', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/posts', {templateUrl: 'partials/posts.html', controller: PostsCtrl}).
      when('/post/:postPath', {templateUrl: 'partials/post.html', controller: PostCtrl}).
      otherwise({redirectTo: '/posts'});
    }
  ]);