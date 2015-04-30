'use strict';

var todoServices = angular.module('todoServices', [
  'ngResource'
]);

todoServices.factory('TodoList', ['$resource', function($resource){
  return $resource('todo_lists/:id.json', { id: '@id' }, {
    'update': { method: 'PATCH'  }
  });
}]);

todoServices.factory('TodoListItem', ['$resource', function($resource){
  return $resource('todo_lists/:todo_list_id/todo_list_items/:id.json', { id: '@id', todo_list_id: '@todo_list_id' }, {
    'update': { method: 'PATCH'  }
  });
}]);