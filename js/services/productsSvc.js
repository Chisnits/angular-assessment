angular.module('assessment').service('productsSvc', function($http){
    this.getData = function(){
        return $http({
            method: 'GET',
            url: "https://practiceapi.devmountain.com/products/"
    }).then(function(response){
        // console.log(response.data)
        if(response.status === 200){
            return response.data
        }
            return "Something Went Wrong"
        })
    }
    this.getDataById = function(id){
        console.log(id)
        return $http({
            method: 'GET',
            url: "https://practiceapi.devmountain.com/products/" + id
    }).then(function(response){
        console.log(response.data)
        if(response.status === 200){
            return response.data
        }
            return "Something Went Wrong"
        })
    }
    // this.serviceTest = 'service works'


});