angular.module('dog',[])
.directive('dog',function(){
        return{
            scope:{
                name:"@",
                cats:'=',
                clicksNumber:"="
            },
            templateUrl:'app/dog/dog.html',
            link: function($scope){
                $scope.$watch(function(){
                    return $scope.cats.filter(function(cat){
                        return !cat.clicks;
                    }).length
                },function(length){
                    $scope.isBow=length>1;
                });
            }
        }
    });