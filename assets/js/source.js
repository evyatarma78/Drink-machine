// variable that simulates a wallet

let credit = 0;

//Can prices

const cola_price = 9;
const fanta_price = 7;
const zero_price = 8;
const sprite_price = 5;

// Cans supply

let cola_qty = 10;
let fanta_qty = 10;
let zero_qty = 10;
let sprite_qty = 10;



function printToScreen() {
  if (credit <= 9) {
    document.querySelector(".screen").innerHTML = `0${credit}.00`;
  }
  
  else {
    document.querySelector(".screen").innerHTML = `${credit}.00`;
  }
}

// function to add money to wallet

function addsh(coin) {
  
  credit += coin;
  document.querySelector("#odef").innerHTML = "";
  
  if (credit <= 9) {
    document.querySelector(".screen").innerHTML = `0${credit}.00`;
  } else {
    document.querySelector(".screen").innerHTML = `${credit}.00`;
  }
}

// function that reruns money and reset the wallet 
function reset(){
  document.querySelector("#odef").innerHTML = `העודף שלך הוא :${credit}ש״ח`;
  document.querySelector(".screen").innerHTML = "00:00";
  credit = 0;

}


function choice_drink (drink) {

  switch(drink){
      case "cola" : {
          if (cola_qty >= 1) {
              if (credit >= cola_price) {
                  credit -= cola_price;
                  cola_qty--;
                  document.querySelector("#get_drink_final").src ="/assets/img/drinks/cola_d.png"
                  if (credit <= 9) {
                          document.querySelector(".screen").innerHTML = `0${credit}.00`;
                  }
                  
                  else {
                    document.querySelector(".screen").innerHTML = `${credit}.00`;
                  }
                  
              }
              else {
                document.querySelector(".screen").innerHTML = `${cola_price} ש"ח`
              }
          }
          else {
                document.querySelector(".screen").innerHTML = "------"
                setTimeout(printToScreen,3000)
          }
          break;
      }
      case "fanta" : {
          if (fanta_qty >= 1) {
              if (credit >= fanta_price) {
                  credit -= fanta_price;
                  fanta_qty--;
                  document.querySelector("#get_drink_final").src = "/assets/img/drinks/fanta_d.png";
                  if (credit <= 9) {
                      document.querySelector(".screen").innerHTML = `0${credit}.00`;
                  }
                  
                  else {
                      document.querySelector(".screen").innerHTML = `${credit}.00`;
                  }
                  
              }
              else {
                    document.querySelector(".screen").innerHTML = `${fanta_price} ש"ח`
              }
          }
          else {
                document.querySelector(".screen").innerHTML = "------"
                setTimeout(printToScreen,3000)
          }
          break;
      }
      case "zero" : {
          if (zero_qty >= 1) {
              if (credit >= zero_price) {
                  credit -= zero_price;
                  zero_qty--;
                  document.querySelector("#get_drink_final").src = "/assets/img/drinks/zero_d.png";
                  if (credit <= 9) {
                        document.querySelector(".screen").innerHTML = `0${credit}.00`;
                  }
                  
                  else {
                        document.querySelector(".screen").innerHTML = `${credit}.00`;
                  }
                  
              }
              else {
                    document.querySelector(".screen").innerHTML = `${zero_price} ש"ח`
              }
          }
          else {
              document.querySelector(".screen").innerHTML = "------"
              setTimeout(printToScreen,3000)
          }
          break;
      }
      case "sprite" : {
          if (sprite_qty >= 1) {
              if (credit >= sprite_price) {
                  credit -= sprite_price;
                  sprite_qty--;
                document.querySelector("#get_drink_final").src = "/assets/img/drinks/sprite_d.png";
                  if (credit <= 9) {
                        document.querySelector(".screen").innerHTML = `0${credit}.00`;
                  }
                  
                  else {
                        document.querySelector(".screen").innerHTML = `${credit}.00`;
                  }
                  
              }
              else {
                  document.querySelector(".screen").innerHTML = `${sprite_price} ש"ח`
              }
          }
          else {
                document.querySelector(".screen").innerHTML = "------"
                setTimeout(printToScreen,3000)
          }
      }
  }
}

function getPahit(){
  document.querySelector("#get_drink_final").src = " ";
}
