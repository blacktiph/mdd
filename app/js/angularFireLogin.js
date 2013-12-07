console.log('angularFireLogin.js is running');

var firebaseURL = new Firebase("https://btc-fullsail.firebaseio.com");

var auth = new FirebaseSimpleLogin(firebaseURL, function(error, user) {

    if (error) {
        console.log(error);
        return;
    }
    if (user) {
        console.log(user + " is logged in.");
    }
    else {
        console.log("user is logged out.");
    }

    $('#fb_login').click(function(){
        console.log('You just clicked the fb login button');

        auth.login('facebook', {
            rememberMe: true,
            scope: 'email,user_likes'
        });
    });

    //== Log Out
    $('#fb_logout').click(function(){
        auth.logout(); 
    });
});

