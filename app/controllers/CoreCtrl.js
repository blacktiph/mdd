btcApp.controller("CoreCtrl", ["$scope","$firebase","$firebaseAuth","$location", function($scope, $firebase,$firebaseAuth,$location) {
        
    $scope.firebaseURL = "https://btc-fullsail.firebaseio.com";

    $scope.anglers = $firebase(new Firebase($scope.firebaseURL+"/entries"));
    // $scope.keys = $firebase(new Firebase($scope.firebaseURL+"/keys"));
    // $scope.users = $firebase(new Firebase($scope.firebaseURL+"/users"));

    var ref = new Firebase($scope.firebaseURL);
     $scope.auth = $firebaseAuth(ref, {path:'/'});

    $scope.$on("$firebaseAuth:login", function(e,user){
        // console.log('logged in');
        // user.pizza = "yum";
        // $scope.users.$add(user);

        // console.log(user);

        $scope.user = $firebase(new Firebase('https://btc-fullsail.firebaseio.com/users/'+user.id));
        $scope.user.$on("loaded", function(userLoaded) {
            if(userLoaded === null)
            {
                var newUser = {
                    //create specific data
                    authorized: false,
                    email: user.email,
                    name: user.name,
                }

                $scope.user.$set(newUser);

                $location.path('/secure');
            }
        });

        // var userCount = $scope.users.length;

        // //create for loop to loop through $scope.users
        // for (var i=0;i<userCount.;i++) {

        //     //if user.id != scope.users[i].id, $add(user);
        //     if(user.id != $scope.users[i].id){

        //         //when adding user, remove the key that they used from $scope.keys 
        //         //and add it to the user object before I do this $add(user)
                

        //         //add the user
        //         $scope.addKeys = function(){

        //             $scope.keys.$add($scope.keyValue);
        //         };
        //     }
        // }

        // $location.path('/submit');
    });

    $scope.$on("$firebaseAuth:logout", function(e,user){
        console.log('logged out');
        $location.path('/');

    });

}]);


