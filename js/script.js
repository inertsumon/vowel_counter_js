
function func(){

    const inputText = document.getElementById("input-text").value;
    const inputLower=inputText.toLowerCase();
    // console.log(inputText);
    let vowels = [];
    [...inputLower].forEach(c => {

        if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
        
            vowels.push(c);
            
        }                      
    });
     console.log(vowels)
    console.log(vowels.toString());
    const outputArea = document.getElementById("output");
    outputArea.innerHTML = `<h4 class="text-primary fw-bold p-2 break">Vowels Are: ${vowels.toString()}</h4>
    <h5 class="text-white fw-bold">Total Vowels: ${vowels.length}</h5>
    <h5 class="text-white p-4 break">Your Text: ${inputText}</h5>`
    

}