function sayHello() {
    const name = prompt("What is your name?");
    alert("Hello, " + name + "! Welcome to my website.");
}

sayHello();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("You rolled a " + dice + "!");
}

rollDice();



function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").stle.color = "white";
}

function lightMode() {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "initial"; // Reset background image if necessary
    document.getElementById("#").style.color = "black"; // Replace # with the actual ID
}