let clicked = 0;
let flag = false;

function boxclicked(box) {
    let sign = "x";


    if (box.innerHTML == "") {

        if (clicked % 2 == 0) {
            sign = "x";
            clicked++;

        } else {
            sign = "0";
            clicked++;

        }
        box.innerHTML = sign;
        chechWinningCases();

    } else {
        alert("invalid move");
    }
}

function chechWinningCases() {
    let box1 = document.getElementById("one").innerHTML;
    let box2 = document.getElementById("two").innerHTML;
    let box3 = document.getElementById("three").innerHTML;
    let box4 = document.getElementById("four").innerHTML;
    let box5 = document.getElementById("five").innerHTML;
    let box6 = document.getElementById("six").innerHTML;
    let box7 = document.getElementById("seven").innerHTML;
    let box8 = document.getElementById("eight").innerHTML;
    let box9 = document.getElementById("nine").innerHTML;
    //  x-winning system
    if (box1 == "x" && box2 == "x" && box3 == "x") {
        setTimeout(function() {
            alert("x won the game")

        }, 1000);


    }
    if (box4 == "x" && box5 == "x" && box6 == "x") {
        setTimeout(function() {
            win();
            alert("x won the game");
        }, 1000);

    }
    if (box7 == "x" && box8 == "x" && box9 == "x") {
        setTimeout(function() {
            win();
            alert("x won the game");
        }, 1000);

    }
    if (box1 == "x" && box4 == "x" && box7 == "x") {
        setTimeout(function() {
            win();
            alert("x won the game");
        }, 1000);

    }
    if (box2 == "x" && box5 == "x" && box8 == "x") {
        setTimeout(function() {
            win();
            alert("x won the game");
        }, 1000);

    }
    if (box3 == "x" && box6 == "x" && box9 == "x") {
        setTimeout(function() {
            win();
            alert("x won the game");
        }, 1000);

    }
    if (box1 == "x" && box5 == "x" && box9 == "x") {
        setTimeout(function() {
            win();
            alert("x won the game");
        }, 1000);

    }
    if (box3 == "x" && box5 == "x" && box7 == "x") {
        setTimeout(function() {
            win();
            alert("x won the game");
        }, 1000);

    }
    // 0-winning system
    if (box1 == "0" && box2 == "0" && box3 == "0") {
        setTimeout(function() {
            win();
            alert("0 won the game");
        }, 1000);
    }

    if (box4 == "0" && box5 == "0" && box6 == "0") {
        setTimeout(function() {
            win();
            alert("0 won the game");
        }, 1000);

    }
    if (box7 == "0" && box8 == "0" && box9 == "0") {
        setTimeout(function() {
            win();
            alert("0 won the game");
        }, 1000);

    }
    if (box1 == "0" && box4 == "0" && box7 == "0") {
        setTimeout(function() {
            win();
            alert("0 won the game");
        }, 1000);

    }
    if (box2 == "0" && box5 == "0" && box8 == "0") {
        setTimeout(function() {
            win();
            alert("0 won the game");
        }, 1000);

    }
    if (box3 == "0" && box6 == "0" && box9 == "0") {
        setTimeout(function() {
            win();
            alert("0 won the game");
        }, 1000);

    }
    if (box1 == "0" && box5 == "0" && box9 == "0") {
        setTimeout(function() {
            win();
            alert("0 won the game");
        }, 1000);

    }
    if (box3 == "0" && box5 == "0" && box7 == "0") {
        setTimeout(function() {
            win();
            alert("0 won the game");
        }, 1000);

    }
    if (clicked == 9 && flag == false) {
        setTimeout(function() {
            alert("tie");
            reset();

        }, 1000)

    }

}

function win() {
    flag = true;
    reset();
}

function reset() {
    let box1 = document.getElementById("one").innerHTML = "";
    let box2 = document.getElementById("two").innerHTML = "";
    let box3 = document.getElementById("three").innerHTML = "";
    let box4 = document.getElementById("four").innerHTML = "";
    let box5 = document.getElementById("five").innerHTML = "";
    let box6 = document.getElementById("six").innerHTML = "";
    let box7 = document.getElementById("seven").innerHTML = "";
    let box8 = document.getElementById("eight").innerHTML = "";
    let box9 = document.getElementById("nine").innerHTML = "";
    clicked = 0;
}