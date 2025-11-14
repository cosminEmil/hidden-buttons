function createButtons() {
    const noButtons = document.getElementById("nrOfButtons").value;
    result = Math.floor(Math.random() * (noButtons));
    for (let i = 0; i < noButtons; ++i) {
        let btn = document.createElement("button");
        btn.id = i;
        btn.className = "btn mt-0 ml-5"
        let element = document.getElementById("buttons");
        element.appendChild(btn);
        btn.addEventListener("click", () => {
            if (btn.id == result) {
                btn.innerText = "Castigator";
            } else {
                btn.innerText = "Pierzator";
            }
            console.log("btn.id -> " + btn.id + " result -> " + result);
        });
    }
}
