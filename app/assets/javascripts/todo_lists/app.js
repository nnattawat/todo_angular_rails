var todoApp = angular.module('todo', [
  'ngRoute',
  'ngResource',
  'todoControllers',
  'todoServices',
  'todoDirectives'
]);

todoApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

  $routeProvider.
    when('/todo_lists', {
      templateUrl: '/templates/todo_lists/index.html',
      controller: 'TodoListsController'
    }).
    when('/todo_lists/:todoListId/todo_list_items', {
      templateUrl: '/templates/todo_list_items/index.html',
      controller: 'TodoListItemsController'
    }).
    otherwise({
      redirectTo: '/todo_lists'
    });

  // set security token for rail
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);