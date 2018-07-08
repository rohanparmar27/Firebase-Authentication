const firebase = require("firebase");


var config = {
    apiKey: "AIzaSyDRky37RplIK8-u7aP1Mjvy1KuarjB8lMA",
    authDomain: "firbasedemo-6d290.firebaseapp.com",
    databaseURL: "https://firbasedemo-6d290.firebaseio.com",
    projectId: "firbasedemo-6d290",
    storageBucket: "firbasedemo-6d290.appspot.com",
    messagingSenderId: "70837975125"
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
    let token = result.credential.accessToken;
    console.log(token)
    let user = result.user;
    console.log(user)

}).catch(function(error) {
    let errorMessage = error.message;
    console.log(errorMessage)
});