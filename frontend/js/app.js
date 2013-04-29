angular.module('textcast', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/posts', {templateUrl: 'frontend/partials/posts.html', controller: PostsCtrl}).
      when('/post/:postUrl', {templateUrl: 'frontend/partials/post.html', controller: PostCtrl}).
      otherwise({redirectTo: '/posts'});
    }
  ]);