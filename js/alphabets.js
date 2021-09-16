const allAlpha = document.querySelectorAll("button");
let output = document.getElementById("output");

for (let input of allAlpha) {
    input.addEventListener("click", clicked);
}

function clicked(input) { 
    let inputText = input.target.innerText;

    if (inputText === "A") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Apple</h4>`;
    }
    else if (inputText === "B") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Ball</h4>`;
    }
    else if (inputText === "C") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Cat</h4>`;
    }
    else if (inputText === "D") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Donkey</h4>`;
    }
    else if (inputText === "E") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Egg</h4>`;
    }
    else if (inputText === "F") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Frog</h4>`;
    }
    else if (inputText === "G") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Gold</h4>`;
    }
    else if (inputText === "H") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Hat</h4>`;
    }
    else if (inputText === "I") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Ice</h4>`;
    }
    else if (inputText === "J") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Jack Fruit</h4>`;
    }
    else if (inputText === "K") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Kidney</h4>`;
    }
    else if (inputText === "L") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Lemon</h4>`;
    }
    else if (inputText === "M") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Mango</h4>`;
    }
    else if (inputText === "N") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Napa Extra</h4>`;
    }
    else if (inputText === "O") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Okay</h4>`;
    }
    else if (inputText === "P") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for PureIt</h4>`;
    }
    else if (inputText === "Q") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Quraan</h4>`;
    }
    else if (inputText === "S") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Student</h4>`;
    }
    else if (inputText === "T") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Teacher</h4>`;
    }
    else if (inputText === "U") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Umbrella</h4>`;
    }
    else if (inputText === "V") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Vacancy</h4>`;
    }
    else if (inputText === "W") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for WWw</h4>`;
    }
    else if (inputText === "X") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for X-Ray</h4>`;
    }
    else if (inputText === "Y") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Yock</h4>`;
    }
    else if (inputText === "Z") {
        output.innerHTML = `<h4 class="text-primary fw-bold p-2">${inputText} for Zack</h4>`;
    }
    
 
}
