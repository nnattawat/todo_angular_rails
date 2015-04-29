'use strict';

var todoServices = angular.module('todoServices', [
  'ngResource'
]);

todoServices.factory('TodoItem', ['$resource', function($resource){
  return $resource('/todo_items/:id.json', { id: '@id' }, {
    'update': { method: 'PATCH'  }
  });
}]);