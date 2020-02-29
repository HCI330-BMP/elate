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
  console.log("Hello");
  body = document.querySelector('body');

  num = Math.random();
  console.log(num);
  if ( 0 < num < 0.2) {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/nature_2.jpg)";
  } else if(0.2 < num < 0.4) {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/nature_3.jpg)";
  } else if(0.4 < num < 0.6) {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(images/nature_9.jpg)";
  } else if(0.6 < num < 0.8) {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/nature_5.jpg)";
  } else {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(images/nature_7.jpg)";
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
