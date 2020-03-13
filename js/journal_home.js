var final_date;
const dateCreator = () => {
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

  final_date = "" + date_start + time;
}

const populateEntries = () => {
  document.querySelector('#entry_section').innerHTML =``;

  fetch("js/users.json")
  .then(response => response.json())
  .then(users => {
    let template = ``;
    template = `
    <div class="journal_entries">
      <h1> Journal Title: ${users['entries']['entry_1']['title']} </h1>
      <p> Entry Date: ${users['entries']['entry_1']['date']} </p>
      <p> Entry: ${users['entries']['entry_1']['entry']} </p>
      <p> Feelings: ${users['entries']['entry_1']['feeling']} </p>
      <p> Tags: ${users['entries']['entry_1']['tag']} </p>
    </div>
    <div class="journal_entries">
      <h1> Journal Title: ${users['entries']['entry_2']['title']} </h1>
      <p> Entry Date: ${users['entries']['entry_2']['date']} </p>
      <p> Entry: ${users['entries']['entry_2']['entry']} </p>
      <p> Feelings: ${users['entries']['entry_2']['feeling']} </p>
      <p> Tags: ${users['entries']['entry_2']['tag']} </p>
    </div>
    `;
    document.querySelector('#entry_section').innerHTML += template;

  });
  let i = 0;
   if (sessionStorage.getItem('n_entry') != null){
     i = sessionStorage.getItem('n_entry');
   } else {
     return;
   }
  while(i > 0) {
    let template = ``;
    template = `
    <div class="journal_entries">
      <h1> Journal Title: ${sessionStorage.getItem("j_title" + i.toString())} </h1>
      <p> Entry Date: ${sessionStorage.getItem("j_date" + i.toString())} </p>
      <p> Entry: ${sessionStorage.getItem("j_entry" + i.toString())} </p>
      <p> Feelings: ${sessionStorage.getItem("j_feels" + i.toString())} </p>
      <p> Tags: ${sessionStorage.getItem("j_tag" + i.toString())} </p>
    </div>
    `;

    i--;
    document.querySelector('#entry_section').innerHTML += template;
  }
};


const askEntry = () => {
  content = document.querySelector("#content");
  content.style.display = 'flex';

  entries = document.querySelector("#entry_section");
  entries.style.display = "none";
};

const closeEntry = () => {
  form = document.querySelector('#content');
  form.style.display = 'none';
  entries = document.querySelector("#entry_section");
  entries.style.display = "flex";
  populateEntries();
};
const enterEntry = () => {
  //Collect Entry Info
  date = document.querySelector("#j_date").value;
  title = document.querySelector("#j_title").value;
  description = document.querySelector('#j_entry').value;
  feels = document.querySelector('#j_feelings').value;
  tag = document.querySelector('#j_tag').value;

  //Check if first Entry

  req_vals = [date, title, description];
  if (validateForm(req_vals)) {
    saveEntry(date, title, description, feels,tag);
    closeEntry();
  } else {
    return;
  }
};

const saveEntry = (date, title, description, feels,tag) => {
  //Set Item
  if (sessionStorage.getItem('n_entry') == null) {
    var entry = 1;
    sessionStorage.setItem('n_entry', entry);
  } else {
    var entry = sessionStorage.getItem('n_entry');
    entry = parseInt(entry);
    entry += 1;
    sessionStorage.setItem('n_entry', entry);
  }
  sessionStorage.setItem('j_date' + entry.toString(), date);
  sessionStorage.setItem('j_title' + entry.toString(), title);
  sessionStorage.setItem('j_entry' + entry.toString(), description);
  sessionStorage.setItem('j_feels' + entry.toString(), feels);
  sessionStorage.setItem('j_tag' + entry.toString(), tag);
};

function textAreaAdjust() {
  el = document.querySelector('#j_entry')
  el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "60px"
}
const validateForm = (vals) => {
  for (v of vals){
    if (v == '') {
      alert('Required fields must be filled out')
      return false;
    }
  }
  return true;
};

