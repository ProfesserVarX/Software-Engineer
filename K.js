const btn = document.querySelector('.btn');
const head = document.querySelector('.head');
const user = document.querySelector('.user');
let random = Math.floor(Math.random() * 30000)+1;
const sub = document.querySelector('.sub');
const input = document.querySelector('.input');
const input2 = document.querySelector('.input2');



random == random;

 if(input2.value == random){
   input2.value.style.color = 'white';
  } 

function cool(){
  random = random;
  if(input2.value == random){
  alert("You're Now Logged In. Your Password Is " + random );
  let emoji;
  
    emoji = "👍";
  
  if(input.value == "Rachel"){
    emoji = "😎";
  }
  if(input.value == "Matthew"){
    emoji = "👨‍💻";
  }
  if(input.value == "Sarah"){
     emoji = "😉";
  }
  if(input.value == "Alison"){
     emoji = "😘";
  }
  if(input.value == "Anita"){
     emoji = "🐀";
  }
  if(input.value == "Anna"){
     emoji = "🤩";
  }
  const user = document.querySelector('.h');
  user.innerHTML = "User: " + input.value;
   alert('You Are Now User:   '+ emoji + input.value);
   input2.style.color = 'white';
  } else {
    
   input2.style.color = 'red';
   alert('Password Wrong');
   
   input2.style.color = 'red';
  }
  
  
  if(input.value == "") {
    
   input2.style.color = 'white';
   alert('Please Fill Out The Form');
  }
  
}

console.log("Your Password Is " + random)


function co() {
  input.value = 'Matthew';
  input2.value = random;
}

random = random;

function p(){
  input2.value = "";
  input.value = "";
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJRpjBX3tpJQ2dxheg6M8fCDsiFqK5XKg",
  authDomain: "login-925cb.firebaseapp.com",
  projectId: "login-925cb",
  storageBucket: "login-925cb.appspot.com",
  messagingSenderId: "969397175827",
  appId: "1:969397175827:web:bda1d6b0bb519c436f61e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);