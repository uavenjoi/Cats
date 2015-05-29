var control=angular.module('control',[]);
control.controller("catController1", function(megaCatsService, $scope, $http) {
    $scope.cats = megaCatsService;
    $scope.clickLimit = 3;
    $scope.select = function(cat) {
        cat.clicks++;
        $scope.selectedCat = cat
    };
    $scope.moreCats = function() {
        $http.get("cats.json").then(function(response) {
            $scope.newCats = response.data;
            $scope.newCats.forEach(function(cat) {
                cat.name += " " + new Date().toLocaleDateString()
            });
            $scope.cats = $scope.cats.concat($scope.newCats)
        })
    }
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
});

control.directive('control',function(){
        return{
            replace:true,
            scope:{
                control:"="
            },
            restrict:'E',
            templateUrl:'app/control/control.html',
            required: '^cat',
            controller: 'catController1'
        }
    });






