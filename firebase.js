// firebase-config.js

// Paste your own Firebase project config here
var firebaseConfig = {
    apiKey: "AIzaSyDhA2xVPoa6XRZdBctfL75qQUShz6hai0k",
    authDomain: "rtk-login.firebaseapp.com",
    databaseURL: "https://rtk-login-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rtk-login",
    storageBucket: "rtk-login.appspot.com",
    messagingSenderId: "266723649023",
    appId: "1:266723649023:web:b5c2d19348767de3f5f3ca"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.firestore();
firebase.storage();