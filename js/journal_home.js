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

  let i = 1;
  while (sessionStorage.getItem("j_date" + i) != null){
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

    i++;
    document.querySelector('#entry_section').innerHTML += template;
    console.log("one loop done");
  }
}


const askEntry = () => {
  form = document.querySelector("#content");
  form.style.display = 'flex';
  entries = document.querySelector("#entry_section");
  entries.style.display = "none";
  dateCreator();
}

const closeEntry = () => {
  form = document.querySelector('#content');
  form.style.display = 'none';
  entries = document.querySelector("#entry_section");
  entries.style.display = "flex";
  dateCreator();
  populateEntries();
}
const saveEntry = () => {
  //Collect Entry Info
  //date = document.querySelector("#j_date").value;
  date = final_date;
  title = document.querySelector("#j_title").value;
  description = document.querySelector('#j_entry').value;
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
  sessionStorage.setItem('j_entry' + entry.toString(), description);
  sessionStorage.setItem('j_feels' + entry.toString(), feels);
  sessionStorage.setItem('j_tag' + entry.toString(), tag);
  console.log('items saved')
}

function textAreaAdjust() {
  el = document.querySelector('#j_entry')
  el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "60px"
}
