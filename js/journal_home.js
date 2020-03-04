document.querySelector('#entry_section').innerHTML = ``;

var b;
/*
console.log("session storage");
for (b = 0; b < sessionStorage.length; b++) {
    console.log(sessionStorage.key(b) + "=[" + sessionStorage.getItem(sessionStorage.key(b)) + "]");
}
*/

let num = 1;
console.log(sessionStorage.getItem("j_date" +num));
console.log((sessionStorage.getItem("j_date" +num) != null));
console.log((sessionStorage.getItem("j_date" + 2) != null));

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
