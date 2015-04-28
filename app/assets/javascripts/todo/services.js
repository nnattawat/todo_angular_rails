'use strict';

var todoServices = angular.module('todoServices', [
  'ngResource'
]);

todoServices.factory('TodoItems', ['$resource',
  function($resource){
    return $resource('/todo_items.json', {}, {
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' }
    });
  }]);

todoServices.factory('TodoItem', ['$resource',
  function($resource){
    return $resource('/todo_items/:id.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
    });
  }]);