let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
let date_start = " " + m + "/" + d + "/" + y;
let hours = n.getHours(); // => 9
let minutes = n.getMinutes();
if (minutes < 10){
  minutes = "0" + minutes;
}
let time = "   " + hours + ":" + minutes;
document.getElementById('j_date').innerHTML += date_start;
document.getElementById('j_date').innerHTML += time;
document.getElementById('j_date').style.fontSize = "100%";

const saveEntry = () => {
  //Collect Entry Info
  //date = document.querySelector("#j_date").value;
  date = "placeholder"
  title = document.querySelector("#j_title").value;
  entry = document.querySelector('#j_entry').value;
  feels = document.querySelector('#j_feelings').value;
  tag = document.querySelector('#j_tag').value;

  //Check if first Entry
  if(sessionStorage.getItem('n_entry') == null){
    var entry = 1;
    sessionStorage.setItem('n_entry', entry);
  } else {
    var entry = sessionStorage.getItem('n_entry');
    entry = parseInt(entry);
    entry += 1;
    sessionStorage.setItem('n_entry', entry);
  }

  //Set Item
  console.log(entry);
  console.log('j_date' + entry.toString());
  sessionStorage.setItem('j_date' + entry.toString(), date);
  sessionStorage.setItem('j_title' + entry.toString(), title);
  sessionStorage.setItem('j_entry' + entry.toString(), entry);
  sessionStorage.setItem('j_feels' + entry.toString(), feels);
  sessionStorage.setItem('j_tag' + entry.toString(), tag);
  console.log('items saved')
  window.location.href = "journal_home.html"
}
