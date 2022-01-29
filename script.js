const calcButtons = document.querySelectorAll("button");
const previousOperand = document.querySelector(".previousOperand");
const currentOperand = document.querySelector(".currentOperand");

let displayNumber = "";

function add(n1, n2){
    return n1 + n2;
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

function collectData(e) {
  let data = "";
  if (e.key === undefined) {
      data = this.id;
  } else {
      data = e.key;
  }
  
  switch(data) {
      case '0':
          displayNumber = displayNumber + '0';
          break;
      case '9':
          displayNumber = displayNumber + '9';
          break;
  }
    currentOperand.textContent = displayNumber;
}

// // // // // // // // function operate(){
// // // // // // // //     selection = window.prompt("Choose a number for the operation. \n 1: add \n 2: subtract \n 3: multiply \n 4: divide ");
// // // // // // // //     switch(selection){
// // // // // // // //         case "1":
// // // // // // // //             if(selection = 1){
// // // // // // // //                 add(add);
// // // // // // // //             }
// // // // // // // //         break;

// // // // // // // //         case "2":
// // // // // // // //             if(selection = 2){
// // // // // // // //                 subtract(subtract);
// // // // // // // //             }
// // // // // // // //         break;

// // // // // // // //         case "3":
// // // // // // // //             if(selection = 3){
// // // // // // // //                 multiply(multiply);
// // // // // // // //             }
// // // // // // // //         break;

// // // // // // // //         case "4":
// // // // // // // //             if(selection = 3){
// // // // // // // //                 divide(divide);
// // // // // // // //             }
// // // // // // // //         break;
// // // // // // // //     }
// // // // // // // // }

calcButtons.forEach(calcButton => calcButton.addEventListener("click", collectData))