//Feature 1
const button = document.getElementById("changeTextBtn");
let text = document.getElementById("welcomeText");

button.addEventListener("click", function(){
    text.textContent = "Hallo JavaScript";
})

//Feature 2
const colorBtn = document.getElementById("colorBtn");
let colorText = document.getElementById("colorText");

colorBtn.addEventListener("click", function(){
    colorText.style.color = "green";
})

//Feature 3
const toggleBtn = document.getElementById("toggleBtn");
let toggleText = document.getElementById("toggleText");
let clickCount = 0;
toggleText.style.color = "black";
toggleText.textContent = "Status: Aus";

toggleBtn.addEventListener("click", function(){
    clickCount ++;
    if(clickCount == 1){
        toggleText.style.color = "green";
        toggleText.textContent = "Status: Ein";
    }
    if(clickCount == 2){
        toggleText.style.color = "red";
        toggleText.textContent = "Status: Aus";
        clickCount = 0;
    }
});

//Feature 4
let counter = 0;

const addBoxBtn = document.getElementById("addBoxBtn");
const boxContainer = document.getElementById("boxContainer");

addBoxBtn.addEventListener("click", function () {
    counter++;

    const box = document.createElement("div");
    box.textContent = "Box " + counter;

    if (counter === 1) {
        box.style.backgroundColor = "lightblue";
    } else if (counter === 2) {
        box.style.backgroundColor = "lightgreen";
    } else if (counter === 3) {
        box.style.backgroundColor = "lightcoral";
    }

    boxContainer.appendChild(box);
});

//Feature 5

let counter2 = 0;
const counterValue = document.getElementById("counterValue");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

plusBtn.addEventListener("click", function(){
    counter2++;
    counterValue.textContent = counter2;
});

minusBtn.addEventListener("click", function(){
    if (counter2 > 0){
        counter2--;
        counterValue.textContent = counter2;
    }else{
        alert("Error!");
    }
});

