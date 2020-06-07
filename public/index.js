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
          
         initChat(user);

          function initChat(user) {
            // Get a Firebase Database ref
            var chatRef = firebase.database().ref("chat");
    
            // Create a Firechat instance
            var chat = new FirechatUI(chatRef, document.getElementById("chat-wrapper"));
    
            // Set the Firechat user
            chat.setUser(user.uid, user.displayName);
        }
    } else {
      // No user is signed in.
      document.getElementById("user_page").style.display = "none";
      document.getElementById("login_page").style.display = "block";
    }
  });

//   firebase.auth().signInWithCustomToken(<CAAAAVocUx3Q:APA91bEx06x-3DR8vqYScSLVT8zEF54eQt-3OiCkt9hSvRoFyRaef9-TJ6-EZH3kzVj5zOoaxT2Qz9UumXZOiw3wR-btA8K-1sqaNX8pQJOgmm49qy1C3IMY4hGkurnNtbtpnMH7JDaY>).catch(function(error) {
//     console.log("Error authenticating user:", error);
//   });

function login(){
    
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error: " + errorMessage);
      });

      // <script type="text/javascript">
      //     document.getElementById("test").onclick = function(){
      //         window.location.href='/Users/deyaliao/hack1/public/pages/dashboard1_0.html'
      //             }
      //   </script>
  }


function logout(){
    firebase.auth().signOut();
}
