function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var diceImage = "https://upload.wikimedia.org/wikipedia/commons/";

    var images = {
        1: "1/1b/Dice-1-b.svg",
        2: "5/5f/Dice-2-b.svg",
        3: "b/b1/Dice-3-b.svg",
        4: "f/fd/Dice-4-b.svg",
        5: "0/08/Dice-5-b.svg",
        6: "2/26/Dice-6-b.svg"
    };

    document.getElementById("dice").src = diceImage + images[randomNumber];
    document.getElementById("result").innerText = "You rolled: " + randomNumber;
}
