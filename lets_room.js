//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyApArzw9VtyOz-tHeEOAkF-PVbSzKVS-LA",
      authDomain: "kwitter-a1898.firebaseapp.com",
      databaseURL: "https://kwitter-a1898-default-rtdb.firebaseio.com",
      projectId: "kwitter-a1898",
      storageBucket: "kwitter-a1898.appspot.com",
      messagingSenderId: "941051126565",
      appId: "1:941051126565:web:a3bc337004d1025ad9b0cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name =localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

    function addRoom(){
          room_name=document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
      localStorage.setItem("room_name",room_name);
      window.location="lets_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name = "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="lets_page.html";
}
function log_out(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}