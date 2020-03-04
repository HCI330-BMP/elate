document.querySelector('#entry_section').innerHTML = ``;

var b;

console.log("session storage");
for (b = 0; b < sessionStorage.length; b++) {
    console.log(sessionStorage.key(b) + "=[" + sessionStorage.getItem(sessionStorage.key(b)) + "]");
}

let num = 1;
console.log(sessionStorage.getItem("g_date" +num));
console.log((sessionStorage.getItem("g_date" +num) != null));
console.log((sessionStorage.getItem("g_date" + 2) != null));

let i = 1;
while (i < 11){
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
