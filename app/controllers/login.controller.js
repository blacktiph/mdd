btcApp.controller("login", ["$scope","$firebase", "$location", function($scope, $firebase, $location) {
        
    $scope.keys = $firebase(new Firebase($scope.firebaseURL+"/keys"));

	// var key1 = "key";

	$scope.keyValue = '';

	//Disable FB login button
    $scope.secure = false;

    $scope.checkKeys = function(){
    	// console.log('key: ',$scope.keyValue);

        for (var i=0;i<$scope.keys.length;i++) {

            console.log('it works');

            if($scope.keyValue == $scope.keys[i]) {
                $scope.user.authorized = true;
                $scope.user.save('authorized');
                $location.path('/submit');
            }
        }
    }

    // var keyArray = ['Q3=8^pgqw6j&', '%P8pxjsC5w%p', 'HftW=gXgkaLW', 'Lg3^D5jhcqiM', '!GLEB4?o7!e$', '%r#eMBr%D5M6', 'g9t+%LyL?%zW', 'HxFEXwP6Fg?A', '?T+SEhGu#hxy', 'q%83ppamqPdx', 'p8SKgPtt8q4D', 'iA4@4o8!L9V=', 'dJp8b88sgo%R', 'shospwW5Ccn3', 'QE7mymRd+YG%', 'a+SBaiT=$Y=^', 'mzzNhMqXbJAx', 'gcQ5y3A@&bDs', 'krYKn8nrjNrV', '+XWBwW@nmu+H', 'zPE4sThJzme3', 'kYzQV=CB&QZL', 'm9uq@?PHk@Fp', '^*?Mw+*!h5yU', 'i*Yt7D3SL!q%', '*WCa@#Qntoto', 'DxEQi6kitady', 'Si$2a=gGMUxp', 'B@4ejcgZXTX3', '%^ZFioHHsGc%', 'eVb7C*2%vTdZ', 'AzA9FcfoURJ^', 'o3M!VKcprVgN', 'NXvDd+*Z9Zdb', 'ikuah*suxoJQ', 'qx#FN6qCzpWN', 'vYiV%Nns?3JU', 'KFGQWz&fCLib', '2qmMr4vd3E@9', '9ws*XKp6*qNx', 'JzbD=7vALNNC', 'vfp4gHNaWj^Q', 'HEaRaAZ*pN2$', 'kjVG^vaD7j2q', 'E9x2^2$tf$Er', 'Ax5tyLXaFuoQ', 'b2c%a!kU+j^o', 'aBf23&48+AC*', 'EGcQtThgdwUj', 'G&odz$KUTAj+', '*Z$CjojTJvA3', '^wecD4yfCZxA', 'cEo?JE!PJf6z', '=DQpjWy6d2w5', '&WS+DoyawwV8', 'Sx+ffnw+U6uD', 'n#7PC5f^%Woh', 'C8A^oqURnLxq', 'qXEm^%$5ywG$', 'JGftTs36mBUS', 'yvohATTjErp6', 'ZR3AsR@QoNpq', '!&p8u!YNDfa9', '9$Jn+2jREa65', '5+YaZ2L3$v=D', 'R@J7+yfP#646', 'k=*R%#ZcLF7M', '%NfcEh*aBYhP', 'eRrsqjii&css', 'Y@!@^byUY6qd', '^5os!nGDjztf', 'tFLMgGABDx5m', '#gcoEb=guu*g', '$GQ$oaoHgarn', 'Y5X2^zrE#jdK', 'vD8uhr=fuyW*', 'B+UXNC7oD&iq', 'J95xXU4*eRf3', 'PHfhpF4birJ^', 'fz=h4Hh7N4wC', 'h8#JJQ3xa4d7', 'V?R!=PQ8LFy%', 'igxn7i6n2k^=', 'o%joC8u3bTLL', '=Mz5+N6KhTw?', 'AzghjV?6Nmg6', 'st%b26iyLPi3', 'yiv5!c+u9YJ$', '4QCbzj7!JtJr', 'uZLmk=Tv&PPT', 'Lz@XLiXDZsrh', '68R$*7RmNnQn', '4&W+PMK42K%P', '9WA74sE#f8&j', '2B?L44nUdyMK', 'Fp5yn$NpLHAw', 'HxLgpiVjYG+^', 'oj6FaRRJRyWs', 'A^7qfVx^h@c8'];

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


