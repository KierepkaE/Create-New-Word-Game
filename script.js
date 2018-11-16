const randomBtn = document.getElementById("prototype");
const wordBtn = document.getElementById("word");
const prototypeArray = ["dive", "avoid", "basic", "grand", "hence"];
let index;
let protWord = document.getElementById("pWord")
const userWord = document.getElementById("userWord");
let number = 0;
const counter = document.getElementById("counter");


///// randomly choosing prototype words

randomBtn.addEventListener("click", () => {
    index = Math.floor(Math.random() * prototypeArray.length);
    protWord.textContent = prototypeArray[index];
    // console.log(index);

})


wordBtn.addEventListener("click", function() {
    let inputVal = userWord.value;
    // console.log(inputVal);
    let valid = true;
    let i = 0;

    while (valid && i < inputVal.length) {

        valid = protWord.textContent.includes(inputVal[i]);
        i++;


    }
    if (valid) {
        number++;
        counter.textContent = number;
        userWord.value = "";
    } else {
        alert("Incorrect word!!!!!")
    }

})