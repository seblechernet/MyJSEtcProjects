

    var rand = Math.floor(Math.random() * 10);
    function game() {
    var guess = document.getElementById("one").value;
    var count = 0;
    while (count <= 4) {
        guess = document.getElementById("one").value;
    if (guess == rand) {
        document.getElementById("result").innerHTML = "That's right! You're a good guesser.";
        count=4;
    }
    else {
        document.getElementById("result").innerHTML = "That is incorrect. Guess again." + guess +"the rand is "+ rand;
        count++;
    }
}

}