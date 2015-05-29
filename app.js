angular.module("my-app", [
    "catService",
    "cat",
    "dog",
    "control"
]);
/*.controller("catController", function(megaCatsService, $scope, $location, $http) {
    $scope.cats = megaCatsService;
    $scope.clickLimit = 3;
    $scope.select = function(cat) {
        cat.clicks++;
        $scope.selectedCat = cat
    };

}).filter("clickFilter", function() {
    return function(input, limit, clicks) {
        return clicks <= limit ? input : ""
    }
}).filter('catsClickFilter', function () {
        return function (cats, limit) {
            limit = limit || 4;
            return cats.filter(function (cat) {
                return !cat.clicks || cat.clicks < limit;
            })
        }
    });*/
