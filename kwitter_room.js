
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDmVi9m9w4ibtda0TiHvf-a_pEAOaWfogA",
      authDomain: "mydb-e6dd2.firebaseapp.com",
      projectId: "mydb-e6dd2",
      storageBucket: "mydb-e6dd2.appspot.com",
      messagingSenderId: "1040103149343",
      appId: "1:1040103149343:web:84348e69d9660e9911aa2a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name- "+ Room_names);
      row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row; 
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}