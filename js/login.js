const validate = () => {
  var username = document.querySelector('#username').value;
  var passsword = document.querySelector('#password').value;
  if ( username == "johnsmith1" && password == "password1") {
    window.location = "user1.html";
    return false;
  }
  else if ( username == "buymepants" && password == "password2") {
    window.location = "user2.html";
    return false;
  }
  else {
    alert("Invalid credentials.");
  }
}

document.querySelector('#login_button').onclick = validate();
