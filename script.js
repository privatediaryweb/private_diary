// script.js

function register() {
  var email = document.getElementById('registerEmail').value;
  var password = document.getElementById('registerPassword').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Account created successfully!');
      localStorage.setItem('userEmail', email);
      window.location.href = 'home.html';
    })
    .catch((error) => {
      alert(error.message);
    });
}

function login() {
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Login successful!');
      localStorage.setItem('userEmail', email);
      window.location.href = 'home.html';
    })
    .catch((error) => {
      alert(error.message);
    });
}

function forgotPassword() {
  var email = document.getElementById('forgotEmail').value;
  
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert('Password reset link sent to your email.');
    })
    .catch((error) => {
      alert(error.message);
    });
}