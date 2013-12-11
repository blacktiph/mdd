btcApp.controller("login", ["$scope","$firebase", function($scope,$firebase) {
        
	var key1 = "h?4rY=P+a2dS";

	$scope.keyValue = '';

	//Disable FB login button
    $scope.secure = true;

    $scope.checkKeys = function(){
    	console.log($scope.keyValue);

    	if($scope.keyValue == key1) {

    		document.getElementById('securityBtn').className += " btn-success";

    		$scope.secure = false;
    	}
    }

    //If security code matches db, then change $scope.secure to false

}]);


