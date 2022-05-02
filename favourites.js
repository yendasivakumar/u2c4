// write js code here corresponding to favourites.html

var favArr = JSON.parse(localStorage.getItem("favourites"));

displayData(favArr);

function displayData(favArr) {
  favArr.forEach((element, index) => {
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
    td6.textContent = "Remove";
    td6.style.color = "white";
    td6.style.backgroundColor = "red";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      removeFav(element, index);
    });

    tr.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(tr);
  });
}

function removeFav(element, index) {
  favArr.splice(index, 1);
  localStorage.setItem("favourites", JSON.stringify(favArr));
  window.location.reload();
}
