var leftMargin = 0;
var queueNosArray = new Array();
var queueNo = window.setInterval(KeepCounting, 1000);
queueNosArray.push(queueNo);

function GearDown() {
    var refToMyDiv = document.getElementById("myCar");
    leftMargin = leftMargin + 10;
    refToMyDiv.style.marginLeft = leftMargin + "px";
    var queueNo = window.setInterval(GearDown, 1000);
    queueNosArray.push(queueNo);
    console.log("Gear " + queueNo);
}

function GearUp() {
    var refToMyDiv = document.getElementById("myCar");
    leftMargin = leftMargin - 10;
    refToMyDiv.style.marginLeft = leftMargin + "px";
    var queueNo = queueNosArray.pop();
    window.clearInterval(queueNo);
    console.log("Gear " + queueNo);
}


marginTop =0;
function MarioMoveDown() {
    var refToMyDiv = document.getElementById("myCar");
    marginTop = marginTop + 10;
    refToMyDiv.style.marginTop = marginTop + "px";
}

function Respawn(){
    window.location.href = "Games.html";
}