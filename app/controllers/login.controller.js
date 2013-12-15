btcApp.controller("login", ["$scope","$firebase", "$location", function($scope, $firebase, $location) {
        
    $scope.keys = $firebase(new Firebase($scope.firebaseURL+"/keys"));

	// var key1 = "key";

	$scope.keyValue = '';

	//Disable FB login button
    $scope.secure = false;

    $scope.checkKeys = function(){
    	// console.log('key: ',$scope.keyValue);

        // console.log($scope.keys);

        angular.forEach($scope.keys, function(value, key){
            // console.log(value, key);
            // console.log(value.keyCode);

            if($scope.keyValue == value.keyCode) {
                $scope.user.authorized = true;
                $scope.user.$save('authorized');
                $location.path('/submit');
                // $scope.user.keyCode = $scope.keyValue;
            }
        });
    }

    // var keyArray = ['Q3=8^pgqw6j&', '%P8pxjsC5w%p', 'HftW=gXgkaLW'];

    // for (var i=0;i<keyArray.length;i++) {
    //     $scope.keys.$add(
    //         {keyCode: keyArray[i]}
    //     );
    // }

    // $scope.addKeys = function(){
    //     $scope.keys.$add($scope.newKey);
    // };

    //If security code matches db, then change $scope.secure to false

}]);


