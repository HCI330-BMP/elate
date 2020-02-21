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
    alert("Invalid credentials");
    return true;
  }
}

const validateKey = () => {
  console.log("hello");
  ev = this.event
  console.log(ev.keyCode)
  if (ev.keyCode === 13) {
    ev.preventDefault();
    validate();
  }
};
