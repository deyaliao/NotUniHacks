firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
      // User is signed in.
      document.getElementById("user_page").style.display = "block";
      document.getElementById("login_page").style.display = "none";

      var user = firebase.auth().currentUser;
      if(user != null){
        sessionStorage.setItem("username", "Bob");
        window.location='pages/dashboard1_0.html';

      }
          
    } else {
      // No user is signed in.
      document.getElementById("user_page").style.display = "none";
      document.getElementById("login_page").style.display = "block";
    }
  });

function login(){
    
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error: " + errorMessage);
      });
  }


function logout(){
    firebase.auth().signOut();
}
