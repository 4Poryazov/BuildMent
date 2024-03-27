var radioBtns = document.getElementById("radioBtns");
var singleEntrance = document.getElementById("singleEntrance");
var wholeBuilding = document.getElementById("wholeBuilding");

var floors = document.getElementById("floors");

singleEntrance.addEventListener('RadioStateChange', changeFloorsField());
wholeBuilding.addEventListener('RadioStateChange', returnFloorsField());

function changeFloorsField(e) {
    if (e.checked) {
        floors.disabled = "true";
    }
}

function returnFloorsField() {
    if (wholeBuilding.checked) {
        floors.disabled = "false";
    }
}
//floors.style.background = "rgb(173, 172, 181)";

