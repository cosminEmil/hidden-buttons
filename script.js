let result;

function generateRandomNumber() {
    result = Math.floor(Math.random() * 3);
}

function generateWinner() {
    const winner = document.getElementById("winner");
    let button1 = document.getElementById("0");
    let button2 = document.getElementById("1");
    let button3 = document.getElementById("2");
    switch (result) {
        case 0: 
        button1.innerText = "Castigator";
        button2.innerText = "Pierzator"
        button3.innerText = "Pierzator";
        break;

        case 1: 
        button1.innerText = "Pierzator";
        button2.innerText = "Castigator"
        button3.innerText = "Pierzator";
        break;

        case 2: 
        button1.innerText = "Pierzator";
        button2.innerText = "Pierzator"
        button3.innerText = "Castigator";
        break;
    }
}