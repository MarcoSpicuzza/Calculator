let number1 = 0;
let number2 = 0;

function add(add){
    number1 = window.prompt("Add|Insert number1");
    number2 = window.prompt("Add|Insert number2");
    add = Number(number1) + Number(number2);
    alert(add);
}
// add(add);

function subtract(subtract){
    number1 = window.prompt("Add|Insert number1");
    number2 = window.prompt("Add|Insert number2");
    subtract = Number(number1) - Number(number2);
    alert(subtract);
}
// subtract(subtract);

function multiply(multiply){
    number1 = window.prompt("Add|Insert number1");
    number2 = window.prompt("Add|Insert number2");
    multiply = Number(number1) * Number(number2);
    alert(multiply);
}
// multiply(multiply);

function divide(divide){
    number1 = window.prompt("Add|Insert number1");
    number2 = window.prompt("Add|Insert number2");
    divide = Number(number1) / Number(number2);
    alert(divide);
}

function operate(){
    selection = window.prompt("Choose a number for the operation. \n 1: add \n 2: subtract \n 3: multiply \n 4: divide ");
    switch(selection){
        case "1":
            if(selection = 1){
                add(add);
            }
        break;

        case "2":
            if(selection = 2){
                subtract(subtract);
            }
        break;

        case "3":
            if(selection = 3){
                multiply(multiply);
            }
        break;

        case "4":
            if(selection = 3){
                divide(divide);
            }
        break;
    }
}
operate();