var todoApp = angular.module('todo', [
  'ngRoute',
  'ngResource',
  'todoControllers',
  'todoServices',
  'todoDirectives'
]);

todoApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

  $routeProvider.
    when('/todo', {
      templateUrl: '/templates/todo/index.html',
      controller: 'TodoItemsController'
    }).
    when('/todo/:todoId', {
      templateUrl: '/templates/todo/show.html',
      controller: 'TodoItemController'
    }).
    otherwise({
      redirectTo: '/todo'
    });

  // set security token for rail
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);