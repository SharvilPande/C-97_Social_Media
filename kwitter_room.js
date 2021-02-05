//ADD YOUR FIREBASE LINKS
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

    user_name = localStorage.getItem("username")

    document.getElementById("Welcome").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
     
      room_name = document.getElementById("add_room_input").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room name", room_name);

      window.location = "kwitter_page.html";

      document.getElementById("add_room_input").value = "";
}

function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      
      console.log("Room Name - " + Room_names);
       
      row = "<div class = 'room_name' id =" + Room_names + " onclick = 'redirectToRoom(this.id)'> #" + Room_names + "</div><hr>";

      document.getElementById("output").innerHTML += row;

      //End code
      });});}

getData();

function redirectToRoom(name) {

    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
      
}

function logout() {

    localStorage.removeItem("username");
    localStorage.removeItem("room name");
    window.location = "index.html";

}
