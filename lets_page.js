//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCJSfg9z7_mtjP4ui27CXWH6EWHVFRjzbk",
      authDomain: "let-s-chat-app-9eb07.firebaseapp.com",
      projectId: "let-s-chat-app-9eb07",
      storageBucket: "let-s-chat-app-9eb07.appspot.com",
      messagingSenderId: "991737720775",
      appId: "1:991737720775:web:a92014b8761fe08288b3e2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,message:msg,like:0
          });
          document.getElementById("msg").value="";
    }
    
    function getData() { 
          firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
    //Start code
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data["name"];
          message = message_data["message"];
          like = message_data["like"];
          nameTag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
          messageTag = "<h4 class='message_h4'>"+message+"</h4>";
          likeButton = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
          spanTag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>";
    
          row = nameTag+messageTag+likeButton+spanTag;
          document.getElementById("output").innerHTML+=row;
          getData();
    //End code
          } });  }); }
    
    function update_like(message_id){
          console.log("Clicked on like button "+message_id);
          button_id=message_id;
          likes = document.getElementById(button_id).value;
          updated_likes=Number(likes)+1;
          console.log(updated_likes);
          firebase.database().ref(room_name).child(message_id).update({
                like:updated_likes
          });
    }
    
    function log_out(){
          localStorage.removeItem("room_name");
          localStorage.removeItem("user_name");
          window.location.replace("index.html");
    }