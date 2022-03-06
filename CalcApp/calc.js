let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
// change screenvalue into displayitem
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is", buttonText);

    if (buttonText == "*") {
        buttonText = '*';
        screenValue += buttonText;
        screen.value = screenValue;

    } else if (buttonText == "C") {          //change C into AC and this is logic for clear screen
        screenValue = "";
        screen.value = screenValue;
    }
    else if (buttonText == "=") {
        screen.value = eval(screenValue);          // change this eval into some other logic
    }
    else{
        screenValue += buttonText;
        screen.value = screenValue;
    }
  });
}
