btcApp.controller("login", ["$scope","$firebase", "$location", function($scope, $firebase, $location) {
        
    $scope.keys = $firebase(new Firebase($scope.firebaseURL+"/keys"));

	$scope.keyValue = '';

    //Reset Dropdown
    $scope.dropdown = false;

	//Disable FB login button
    $scope.secure = false;

    $scope.checkKeys = function(){
        angular.forEach($scope.keys, function(value, key){
            if($scope.keyValue == value.keyCode) {
                $scope.user.authorized = true;
                $scope.user.$save('authorized');
                $location.path('/submit');
            }
        });
    }
}]);


