let clicked = 0;

function boxclicked(box) {
    let sign = "x";

    console.log(sign);
    console.log(clicked);
    if (box.innerHTML == "") {
        if (clicked % 2 == 0) {
            sign = "x";
            clicked++;
        } else {
            sign = "0";
            clicked++;
        }
        box.innerHTML = sign;
    } else {
        alert("invalid move");
    }
}