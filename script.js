document.getElementById("form-login").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(() => {
        document.getElementById("form-login").style.display = "none";
        document.getElementById("painel").style.display = "block";
      })
      .catch(error => {
        alert("Erro ao entrar: " + error.message);
      });
  });
  
  function logout() {
    firebase.auth().signOut().then(() => {
      location.reload();
    });
  }
  