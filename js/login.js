const email = document.getElementById('email')
const password= document.getElementById('password')

function showPassword() {
  const passwordInput = document.getElementById("passwordInput");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    button.src = "../imgs/eye.png";
  } else {
    passwordInput.type = "password";
    button.src = "../imgs/hidden.png";
  }
}

function login(){

}

window.showPassword = showPassword;