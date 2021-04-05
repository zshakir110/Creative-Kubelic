

//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyByE5DPFuSenELdDCQ9YSOdj6EPj7DcJKo",
      authDomain: "kwitter-app-24c3e.firebaseapp.com",
      databaseURL: "https://kwitter-app-24c3e-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-24c3e",
      storageBucket: "kwitter-app-24c3e.appspot.com",
      messagingSenderId: "211077949856",
      appId: "1:211077949856:web:6e534cfcd2c76273a65cc5",
      measurementId: "G-F6533JR166"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
    function addUser()
    {
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"   
        });
    }
//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyByE5DPFuSenELdDCQ9YSOdj6EPj7DcJKo",
    authDomain: "kwitter-app-24c3e.firebaseapp.com",
    databaseURL: "https://kwitter-app-24c3e-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-24c3e",
    storageBucket: "kwitter-app-24c3e.appspot.com",
    messagingSenderId: "211077949856",
    appId: "1:211077949856:web:6e534cfcd2c76273a65cc5",
    measurementId: "G-F6533JR166"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"   
      });
  }
//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyByE5DPFuSenELdDCQ9YSOdj6EPj7DcJKo",
    authDomain: "kwitter-app-24c3e.firebaseapp.com",
    databaseURL: "https://kwitter-app-24c3e-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-24c3e",
    storageBucket: "kwitter-app-24c3e.appspot.com",
    messagingSenderId: "211077949856",
    appId: "1:211077949856:web:6e534cfcd2c76273a65cc5",
    measurementId: "G-F6533JR166"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"   
      });
  }
//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyByE5DPFuSenELdDCQ9YSOdj6EPj7DcJKo",
    authDomain: "kwitter-app-24c3e.firebaseapp.com",
    databaseURL: "https://kwitter-app-24c3e-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-24c3e",
    storageBucket: "kwitter-app-24c3e.appspot.com",
    messagingSenderId: "211077949856",
    appId: "1:211077949856:web:6e534cfcd2c76273a65cc5",
    measurementId: "G-F6533JR166"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"   
      });
  }
//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyByE5DPFuSenELdDCQ9YSOdj6EPj7DcJKo",
    authDomain: "kwitter-app-24c3e.firebaseapp.com",
    databaseURL: "https://kwitter-app-24c3e-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-24c3e",
    storageBucket: "kwitter-app-24c3e.appspot.com",
    messagingSenderId: "211077949856",
    appId: "1:211077949856:web:6e534cfcd2c76273a65cc5",
    measurementId: "G-F6533JR166"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"   
      });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
