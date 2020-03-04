

let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
let date_start = " " + m + "/" + d + "/" + y;


document.getElementById('g_date_start').innerHTML += date_start;
document.getElementById('g_date_start').style.fontSize = "100%";



const saveGoal = () => {
  //Collect Entry Info
  date = date_start;
  date_end = document.querySelector("#g_date_end").value;
  title = document.querySelector("#g_title").value;
  description = document.querySelector('#g_entry').value;
  reward = document.querySelector('#g_reward').value;
  points = document.querySelector('#points').value;

  //Check if first Entry
  if(sessionStorage.getItem('goal_entry') == null){
    var entry = 1;
    sessionStorage.setItem('goal_entry', entry);
  } else {
    var entry = sessionStorage.getItem('goal_entry');
    entry = parseInt(entry);
    entry += 1;
    sessionStorage.setItem('goal_entry', entry);
  }

  //Set Item
  console.log(entry);
  console.log('g_date' + entry.toString());
  sessionStorage.setItem('g_date' + entry.toString(), date);
  sessionStorage.setItem('g_date_end' + entry.toString(), date_end);
  sessionStorage.setItem('g_title' + entry.toString(), title);
  sessionStorage.setItem('g_entry' + entry.toString(), description);
  sessionStorage.setItem('g_reward' + entry.toString(), reward);
  sessionStorage.setItem('g_points' + entry.toString(), points);
  console.log('items saved')
  window.location.href = "goals.html"
}
