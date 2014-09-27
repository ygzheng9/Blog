angular.module("tstApp")
  .factory('Items', ['$resource', function ($resource) {

    function getAllCategories() {
      var categories = $resource('/api/categories.json');
      return categories.query();
    }

    function getAllItems() {
      var items = $resource('/api/items.json');
      return items.query();
    }

    return {
      getAllCategories: getAllCategories,
      getAllItems: getAllItems
    };
}]);