function TempSelect(blockID) {
    var refToBlock = document.getElementById(blockID);
    refToBlock.style.backgroundColor = "lightgray";
}

function TempUnSelect(blockID) {
    var refToBlock = document.getElementById(blockID);
    refToBlock.style.backgroundColor = "aquamarine";
}

function StartGame(){
    var attemptsRemaining = 3;
    var refToLivesDiv = document.getElementById("lives");
    var refToResult = document.getElementById("result");

    refToResult.innerText = "In progress";
    refToLivesDiv.innerText = attemptsRemaining;


    var randomNumberLessThan1 = Math.random();
    while (randomNumberLessThan1 * 10 < 1) {
        randomNumberLessThan1 = Math.random();
    }
    var randomNumberInRange = Math.floor(randomNumberLessThan1 * 10)
    console.log(randomNumberInRange);
}


function Select(blockID) {
    var refToBlock = document.getElementById(blockID);

    while (true) {
        StartGame.attemptsRemaining = StartGame.attemptsRemaining -1;
        if (StartGame.attemptsRemaining==0) {
            StartGame.refToResult.innerText = "You lost!";
            console.log("Correct choice was = " + StartGame.randomNumberInRange);
            window.alert("Out of lives...You lost!");
            break;
        }

        else if(refToBlock.id == StartGame.randomNumberInRange){
            refToBlock.style.backgroundColor = "green";
            StartGame.refToResult.innerText = "You won!";
            window.alert("You won!")
            console.log("Correct choice was = " + StartGame.randomNumberInRange);
            window.alert("You Won!");
            break;
        }
        else {
            refToBlock.style.backgroundColor = "red";
            StartGame.refToResult.innerText = "Failed... Try again";
            window.alert("You won!")
            console.log("Correct choice was = " + StartGame.randomNumberInRange);
        }
    }
}