var current_user;
const validate = () => {
  var username = document.querySelector('#username').value;
  var password = document.querySelector('#password').value;
  fetch("js/users.json")
    .then(response => response.json())
    .then(users => {
      console.log(users["user2"])
      console.log(password)
        if (username == users["user1"]["username"] && password == users["user1"]["password"]) {
          window.location.href = "menu.html?user=user1";
          return true;
        }
        else if ( username == users["user2"]["username"]&& password == users["user2"]["password"]) {
          window.location.href = "menu.html?user=user2"
          return true;
        }
        else {
          alert("Invalid credentials");
          return true;
        }
      });
};

const validateKey = () => {
  ev = this.event
  console.log(ev.keyCode)
  if (ev.keyCode === 13) {
    ev.preventDefault();
    validate();
  }
};

const currentUser = () => {
  var parameters = location.search.substring(1).split("&");
  var temp = parameters[0].split("=");
  u_name = unescape(temp[1]);
  current_user = u_name
}
const addUserInfo = () => {
    currentUser();
    fetch("js/users.json")
      .then(response => response.json())
      .then(users => {
        user = users[u_name]
        const template = `
        <h1> My Profile </h1>
        <p> User since ${user['user_since']} </p>
        <p> Username: ${user['username']} </p>
        <p> Email: ${user['email']} </p>
        <p> Journals written: ${user['n_jour']} </p>
        <button> Edit profile </button>
      `
      document.querySelector("#profbox").innerHTML = template;
    });
};

const personalizeLinks = () => {
  currentUser();
  var links = document.querySelectorAll('a');
  for (l of links) {
    if(l.getAttribute('href') == 'index.html'){
      continue;
    }
    current = l.getAttribute('href')
    console.log(current + "?user=" + current_user);
    l.href = current + '?user=' + current_user;
  }
}
