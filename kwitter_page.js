//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCRqn8ZOw_UU52QaDvbZqMB4oO5cDJI8Fc",
      authDomain: "kwitter-app-f6ffd.firebaseapp.com",
      databaseURL: "https://kwitter-app-f6ffd-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-f6ffd",
      storageBucket: "kwitter-app-f6ffd.appspot.com",
      messagingSenderId: "897538684450",
      appId: "1:897538684450:web:fbf28a63d6493606bafc7b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("username");
 room_name = localStorage.getItem("room name");

 function send() {
      msg = document.getElementById("msg").value;
      
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(message_data);
        console.log(firebase_message_id);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_tag = "<h4>" + name + "<img src='tick.png' class = 'user_tick'></h4>";
        text_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
        like_button = "<button class = 'btn btn-warning' id ='" + firebase_message_id + "' value ='" + like + "' onclick = 'updateLike(this.id)'>";
        span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like:" + like + "</span></button>"

        row = name_tag + text_tag + like_button + span_tag;
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id) {

      console.log(message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(button_id).update({
            like: updated_likes
      });
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room name");
      window.location = "index.html";
}
