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
