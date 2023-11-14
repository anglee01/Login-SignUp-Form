var firebaseConfig = {
    apiKey: "AIzaSyCtJqhZRi5mJOJDFy8VA05Mt4MMpKEpod8",
    authDomain: "signup-login-form-77e7b.firebaseapp.com",
    projectId: "signup-login-form-77e7b",
    storageBucket: "signup-login-form-77e7b.appspot.com",
    messagingSenderId: "801128214977",
    appId: "1:801128214977:web:b1bfd64a3884e02cb23f40",
    measurementId: "G-4ZWPTH98QM"
  };
  // Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
console.log(app);


// *********************SignUp Auth**********************
function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          alert("email verification sent..");
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

// *********************forgotpassword Auth**********************
function forgotPassword() {
  var email = document.getElementById("email");

  firebase
    .auth()
    .sendPasswordResetEmail(email.value)
    .then(() => {
      alert("password reset email sent..");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}
// *********************Login Auth**********************



function login() {
   var email = document.getElementById("email");
   var password = document.getElementById("password");
   firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

}
function loginWithGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // IdP data available in result.additionalUserInfo.profile.
        // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage );
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  
  //******************github authentication*************
  function loginWithGithub(){
  var provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = credential.accessToken;
  
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // IdP data available in result.additionalUserInfo.profile.
        // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  
      













// *********************Sign Up Auth**********************






// function signUp() {
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

// }