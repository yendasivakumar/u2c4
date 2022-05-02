// write js code here corresponding to matches.html

var scheduleArr = JSON.parse(localStorage.getItem("schedule"));

var venueFilter = document.querySelector("#filterVenue");
venueFilter.addEventListener("change", filterByvenue);

function filterByvenue() {
  var val = venueFilter.value;

  var filteredArr = scheduleArr.filter(function (element) {
    return element.venue == val;
  });
  displayData(filteredArr);
}

displayData(scheduleArr);

function displayData(scheduleArr) {
  document.querySelector("tbody").innerHTML = "";
  scheduleArr.forEach((element) => {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = element.matchNum;

    var td2 = document.createElement("td");
    td2.textContent = element.teamA;

    var td3 = document.createElement("td");
    td3.textContent = element.teamB;

    var td4 = document.createElement("td");
    td4.textContent = element.date;

    var td5 = document.createElement("td");
    td5.textContent = element.venue;

    var td6 = document.createElement("td");
    td6.textContent = "Add As Favourites";
    td6.style.color = "white";
    td6.style.backgroundColor = "green";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      addToFav(element);
    });

    tr.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(tr);
  });
}

var favArr = JSON.parse(localStorage.getItem("favourites")) || [];

function addToFav(element) {
  favArr.push(element);
  localStorage.setItem("favourites", JSON.stringify(favArr));
}
