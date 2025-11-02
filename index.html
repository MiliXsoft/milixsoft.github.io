<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MiliXsoft - Logowanie</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>

    <div class="container">
      <h1 class="title">MiliXsoft</h1>
  
      <input id="email" type="email" placeholder="Email">
      <input id="password" type="password" placeholder="Hasło">
  
      <button id="loginBtn">Zaloguj</button>
      <button id="registerBtn">Zarejestruj</button>
  
      <p id="status"></p>
    </div>
  
    <script type="module">
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
      import { 
        getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword 
      } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  
      const firebaseConfig = {
        apiKey: "AIzaSyAzi6XK8OL8Fr1xLb-pyQw2mMPuI1-g4iM",
        authDomain: "milixsoft-9b81e.firebaseapp.com",
        projectId: "milixsoft-9b81e",
        storageBucket: "milixsoft-9b81e.firebasestorage.app",
        messagingSenderId: "443043131107",
        appId: "1:443043131107:web:1ff1926eff9ada03dedfd6",
      };
  
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
  
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const status = document.getElementById("status");
  
      // Logowanie
      document.getElementById("loginBtn").onclick = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          window.location.href = "dashboard.html"; // po logowaniu
        })
        .catch(error => {
          status.innerText = "Błąd logowania: " + error.message;
        });
      };
  
      // Rejestracja
      document.getElementById("registerBtn").onclick = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          status.innerText = "Konto utworzone! Teraz się zaloguj.";
        })
        .catch(error => {
          status.innerText = "Błąd rejestracji: " + error.message;
        });
      };
    </script>

  </body>
</html>
