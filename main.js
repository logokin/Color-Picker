var hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var hexBtn = document.querySelector(".hexbtn");
var hex = document.querySelector(".hex");
var bodybcg = document.querySelector("body");

hexBtn.addEventListener("click", geetHex);

function geetHex() {
  var hexcolor = "#";

  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * hexNumbers.length);
    hexcolor += hexNumbers[random];

    /* console.log(random);
    console.log(hexcolor);*/
  }
  bodybcg.style.backgroundColor = hexcolor;
  hex.innerHTML = hexcolor;
}
