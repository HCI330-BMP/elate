var current_user;
const validate = () => {
  var username = document.querySelector('#username').value;
  var password = document.querySelector('#password').value;
  users = fetch("js/users.json")
    .then(response => response.json())
    .then(users => {
      console.log(users["user2"])
      console.log(password)
        if (username == users["user1"]["username"] && password == users["user1"]["password"]) {
          window.location.href = "user1.html";
          current_user = users["user1"];
          console.log('current_user');
          return true;
        }
        else if ( username == users["user2"]["username"]&& password == users["user2"]["password"]) {
          window.location.href = "user2.html"
          current_user = users["user2"];
          console.log(current_user);
          return true;
        }
        else {
          alert("Invalid credentials");
          return true;
        }
      })
};

const validateKey = () => {
  ev = this.event
  console.log(ev.keyCode)
  if (ev.keyCode === 13) {
    ev.preventDefault();
    validate();
  }
};

const addUserInfo = () => {
    user = current_user;
    const template = `
    <h1> My Profile </h1>
    <p> User since ${user['user_since']} </p>
    <p> Username: ${user['username']} </p>
    <p> Email: ${user['email']} </p>
    <p> Journals written: ${user['n_jour']} </p>
    <button> Edit profile </button>
  `
  document.querySelector("profbox").innerHTML = template;
};
