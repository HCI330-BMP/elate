const loadHeader = () => {
  template = `
  <div id = "title">
    <h1> Elate </h1>
    <p> Remember the good times. </p>
  </div>
  <div class = "dropdown" onmouseover="rotateBars()" onmouseout="rotateBarsBackwards()">
    <i class="fas fa-bars dropdownbtn"></i>
    <div class="dropdown-content">
       <a href="menu.html">Home</a>
       <a href="index.html">Logout</a>
    </div>
  </div>`;

  document.querySelector('header').innerHTML = template;
}

const randomBackground = () => {
  if (sessionStorage.getItem('last_background') == null) {
    var background = Math.random() * 5;
    var background = Math.floor(background);
    console.log(background);
    sessionStorage.setItem('last_background', background);
  } else {
    console.log('new_background');
    var background = parseInt(sessionStorage.getItem('last_background'));
    background += 1;
    background = background % 5

    sessionStorage.setItem('last_background', background)
  }
  console.log(background)
  body = document.querySelector('body');

  if (background == 0) {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/nature_7.jpg)";
  } else if(background == 1) {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/nature_3.jpg)";
  } else if(background == 2) {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(images/nature_9.jpg)";
  } else if(background == 3) {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/nature_5.jpg)";
  } else {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/nature_2.jpg)";
  }
  body.style.height = 100;
  body.style.backgroundPosition = 'center';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundSize = 'cover';
  body.style.position = 'relative';

};

const rotateBars = () => {
  btn = document.querySelector('.dropdownbtn');
  btn.style.transform = 'rotate(90deg)';
};
const rotateBarsBackwards = () => {
  console.log('hello')
  btn = document.querySelector('.dropdownbtn');
  btn.style.transform = 'rotate(0deg)';
}

//document.querySelector('.dropdown').addEventHandler("mouseover", rotateBars);
