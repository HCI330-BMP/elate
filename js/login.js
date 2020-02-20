const validate = () => {
  var username = document.querySelector('#username').value;
  var password = document.querySelector('#password');

  if (username == "johnsmith1" && password.value == "password1") {
    window.location.href = "user1.html";
    return true;
  }
  else if ( username == "buymepants" && password.value == "password2") {
    window.location.href = "user2.html"
    return true;
  }
  else {
    console.log("Invalid");
    alert("Invalid credentials");
    return true;
  }
}
