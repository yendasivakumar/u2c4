// write js code here corresponding to index.html
// You should add submit event on the form

var form = document.querySelector("#masaiForm");

var scheduleArr = JSON.parse(localStorage.getItem("schedule")) || [];

form.addEventListener("submit", collectData);

function collectData() {
  event.preventDefault();
  data = {
    matchNum: masaiForm.matchNum.value,
    teamA: masaiForm.teamA.value,
    teamB: masaiForm.teamB.value,
    date: masaiForm.date.value,
    venue: masaiForm.venue.value,
  };
  scheduleArr.push(data);

  localStorage.setItem("schedule", JSON.stringify(scheduleArr));
}
