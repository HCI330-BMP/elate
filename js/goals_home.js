var date_start;
const dateCreator = () => {
  let n =  new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  date_start = " " + m + "/" + d + "/" + y;
  let hours = n.getHours(); // => 9
  let minutes = n.getMinutes();
  if (minutes < 10){
    minutes = "0" + minutes;
  }

  document.getElementById('g_date_start').innerHTML += date_start;
  document.getElementById('g_date_start').style.fontSize = "100%";
};


const populateGoals = () => {
  document.querySelector('#entry_section').innerHTML = ``;
  let i = 11;
  while (i > 0){
    if (sessionStorage.getItem("g_date" + i) != null){
      let template = ``;
      template = `
      <div class="journal_entries">
        <h1> Goal Title: ${sessionStorage.getItem("g_title" + i.toString())} </h1>
        <p> Start Date: ${sessionStorage.getItem("g_date" + i.toString())}</p>
        <p> End Date: ${sessionStorage.getItem("g_date_end" + i.toString())}</p>
        <p> Goal Description: ${sessionStorage.getItem("g_entry" + i.toString())} </p>
        <p> Reward: ${sessionStorage.getItem("g_reward" + i.toString())} </p>
        <p> Points: ${sessionStorage.getItem("g_points" + i.toString())} </p>
        <button onclick="completeGoal(${i});"> Complete Goal </button>
      </div>

      `;


      document.querySelector('#entry_section').innerHTML += template;
    }
    i--;
  }
}
const reloadGoals = () => {
  document.querySelector('#entry_section').innerHTML = ``;
  let i = 1;
  while (i < 31){
    if (sessionStorage.getItem("g_date" + i) != null){
      let template = ``;
      template = `
      <div class="journal_entries">
        <h1> Goal Title: ${sessionStorage.getItem("g_title" + i.toString())} </h1>
        <p> Start Date: ${sessionStorage.getItem("g_date" + i.toString())}</p>
        <p> End Date: ${sessionStorage.getItem("g_date_end" + i.toString())}</p>
        <p> Goal Description: ${sessionStorage.getItem("g_entry" + i.toString())} </p>
        <p> Reward: ${sessionStorage.getItem("g_reward" + i.toString())} </p>
        <p> Points: ${sessionStorage.getItem("g_points" + i.toString())} </p>
        <button onclick="completeGoal(${i});"> Complete Goal </button>
      </div>

      `;


      document.querySelector('#entry_section').innerHTML += template;
    }
    i++;
    console.log("one loop done");
  }
}

const completeGoal = (num) => {
  num = num.toString();
  alert("Reward: " + sessionStorage.getItem("g_reward" + num.toString()) +
  "\nEarned " + sessionStorage.getItem("g_points" + num.toString()) + " points.");
  sessionStorage.removeItem("g_date" + num);
  reloadGoals();

}
const askGoal = () => {
  form = document.querySelector("#content");
  form.style.display = 'flex';
  entries = document.querySelector("#entry_section");
  entries.style.display = "none";
}

const closeGoal= () => {
  form = document.querySelector('#content');
  form.style.display = 'none';
  entries = document.querySelector("#entry_section");
  entries.style.display = "flex";
  dateCreator();
  populateGoals();
}

const enterGoal = () => {
  //Collect Entry Info
  date = date_start;
  date_end = document.querySelector("#g_date_end").value;
  title = document.querySelector("#g_title").value;
  description = document.querySelector('#g_entry').value;
  reward = document.querySelector('#g_reward').value;
  points = document.querySelector('#points').value;

  req_vals = [date_start, date_end, title, description]
  if (validateForm(req_vals)) {
    console.log('true');
    saveGoal();
    closeGoal();
    populateGoals();
  } else {
    return;
  }
};
const saveGoal = () => {
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
};

const validateForm = (vals) => {
  for (v of vals){
    if (v == '') {
      alert('Required fields must be filled out')
      return false;
    }
  }
  return true;
};
