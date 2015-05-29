angular.module('cat',[])
.directive('cat',function(){
        return{
            replace:true,
            scope:{
                cat:'=',
                action:'&'
            },
            restrict: 'E',
            templateUrl: 'app/cat/cat.html',
            link: function($scope){
                    $scope.cat.name += " " +  new Date().toLocaleDateString();
                    $scope.select=function(cat, e){
                        $scope.action({$cat: cat, $event: e});
                    }
            }
        }
});