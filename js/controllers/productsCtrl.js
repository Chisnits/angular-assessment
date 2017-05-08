angular.module('assessment').controller('productsCtrl', function($scope, productsSvc){
    // $scope.id = products.id;

 productsSvc.getData().then(function(products, id){
        var products = products
        $scope.products = products;
        // console.log(products)
        for (let obj of products) {
            // console.log(obj);
            var id = obj.id;
            console.log(id)
} 
        
    })
    // $scope.test = "test"
    // $scope.serviceTest = productsSvc.serviceTest;

});