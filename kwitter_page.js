const firebaseConfig = {
  apiKey: "AIzaSyDKKcIuJ5o5DGINbbOT-9p3G2g_mIV1Eqk",
  authDomain: "kwitter-oroject.firebaseapp.com",
  databaseURL: "https://kwitter-oroject-default-rtdb.firebaseio.com",
  projectId: "kwitter-oroject",
  storageBucket: "kwitter-oroject.appspot.com",
  messagingSenderId: "127323617012",
  appId: "1:127323617012:web:8de8dc7367da30ff4e50a1",
  measurementId: "G-0HXZYD5TH5"
};

  firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name, 
    message:msg, 
like:0
});
document.getElementById("msg").value="";


}

function getData() { 
  firebase.database().ref("/"+room_name).on('value', function(snapshot) 
  { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot)
     {
        childKey  = childSnapshot.key;
        childData = childSnapshot.val();
         if(childKey != "purpose") 
         {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name=message_data['name'];
 message=message_data['message'];
 like=message_data['like'];
 message_with_tag="<h4>"+ name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message +"</h4>";

//End code
  } });  }); }

