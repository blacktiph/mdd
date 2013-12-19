btcApp.controller("login", ["$scope","$firebase", "$location", function($scope, $firebase, $location) {
        
    $scope.keys = $firebase(new Firebase($scope.firebaseURL+"/keys"));

	// var key1 = "key";

	$scope.keyValue = '';

    //Reset Dropdown
    $scope.dropdown = false;

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

    // var keyArray = ['XW6PyaQ', 'zRJ2UDK', 'fQ8mqX5', 'wDeeN6D', 'SyiRTxj', 'BhDQsqu', 'kBZvvBR', 'oU6JnDH', 'g4dE3XJ', 'eLQPsGQ', 'xh6Njnf', 'R66B6Wh', 'wmSkKud', 'crPsQLP', 'aFo2zVh', 'WXJsA5A', 'ScPBd4x', 'fGfV8zQ', '2Axf4sy', 'Pz4MaDs', '4cUKCEp', 'QCTM9TU', 'aEWNmxT', 'aZUCX7E', 'ifZbDsd', 'N93kejb', 'TnYqTQ7', 'A7BywnV', 'V5nNrAh', 'zUGCjZw', 'ftsbjGY', 'bNZyrmK', 'fdwxsDH', 'Ntvuq9v', 'qNKUQ5m', 'iWHTTqS', 'CS5CWTC', 'QqQbjGf', 'WWFKAHF', 'BwMtSWR', 'yqa4YVm', 'PyQEyBX', 'CXNuBRm', 'MHFcXYT', 'mKCTmDB', 'dHxZPrG', 'YhZKWwg', 'nyFs26y', 'RTujKcf', 'qqGs3fy', 'MSQ6mE9', '8BEomJL', 'Gv38bJ5', '4ytBphw', 'bRMkGCF', 'BJsbuPy', 'HeyMY4c', 'qF5dC84', 'twWpUbS', 'kHAE495', '7TLswak', '7XRP9Vs', '9uG7e7t', 'YvYXwK4', 'faw9Vdp', 'c565VSy', 'wbfoBu7', 'kAftBHk', '5j3FcrS', '9tMJPJX', '9AtvV7k', 'MaKnUnp', 'gnNJGWw', 'YEvNTx7', 'i4fAdfL', 'phuuw5y', 'uQ5pqg8', 'L7fQy8v', 'hwYVLT6', 'sYnPyfG', 'wCqmkWu', '8Uow5Ym', '6KVSUJt', 'JdbXNPN', 'yEboCH9', 'PiszC63', 'VVCEoyA', 'mVRqN9K', 'KRURjzz', 'HKuY5Lf', 'xsBWbMV', 'RSHi5yT', 'QT4AJon', 'FVoZ8sS', 'RWisHFP', 'Y6iVpH5', 'PU8djWY', '5raEQHp', '6WbUUKY', 'CnYUhPj'];

    // for (var i=0;i<keyArray.length;i++) {
    //     $scope.keys.$add(
    //         {keyCode: keyArray[i]}
    //     );
    // }

}]);


