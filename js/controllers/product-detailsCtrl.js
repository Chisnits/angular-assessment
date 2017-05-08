angular.module('assessment').controller('product-detailsCtrl', function($scope, $stateParams, productsSvc){
console.log($stateParams.id)
 productsSvc.getDataById($stateParams.id).then(function(productById){
        var productById = productById;
        $scope.productById = productById;
        console.log(productById)
    })
    // $scope.test = "test"
    // $scope.serviceTest = productsSvc.serviceTest;

});