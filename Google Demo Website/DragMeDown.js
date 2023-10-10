var leftMargin = 0;
// var iterations = 0;

function MarioMoveRight() {
    var refToMyDiv = document.getElementById("myCar");
    leftMargin = leftMargin + 10;
    refToMyDiv.style.marginLeft = leftMargin + "px";
}

function MarioMoveLeft() {
    var refToMyDiv = document.getElementById("myCar");
    leftMargin = leftMargin - 10;
    refToMyDiv.style.marginLeft = leftMargin + "px";
}