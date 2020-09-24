window.addEventListener('load', start);

var numberAinput = null;
var numberBinput = null;

function start() {
   numberAinput = document.querySelector("#numberA");
   numberBinput = document.querySelector("#numberB");
   numberAinput.addEventListener('input', calculos);
   numberBinput.addEventListener('input', calculos);
   numberAinput.focus();
}

function calculos() {
   var alertA = document.querySelector('#numberAalert');
   var alertB = document.querySelector('#numberBalert');
   
   var numberA = numberAinput.value;
   var numberB = numberBinput.value;

   if (numberA === "" || numberB === "") {
      if (alertA !== "" && numberA == "") {
         alertA.innerHTML = "Adicione o número A.";
      }
      if (alertB !== "" && numberB == "") {
         alertB.innerHTML = "Adicione o número B.";
      }
   } else {
      alertA.innerHTML = "";
      alertB.innerHTML = "";

      numberA = parseInt(numberA, 10);
      numberB = parseInt(numberB, 10);

      // a + b
      var result = numberA + numberB;
      var input = document.querySelector("#sum");
      input.value = result;

      // a - b
      result = numberA - numberB;
      input = document.querySelector("#subtrAB");
      input.value = result;

      // b - a
      result = numberB - numberA;
      input = document.querySelector("#subtrBA");
      input.value = result;

      // a * b
      result = numberA * numberB;
      input = document.querySelector("#mult");
      input.value = result;

      // a / b 
      result = divide(numberA, numberB);
      input = document.querySelector("#divAB");
      input.value = result;

      // b / a
      result = divide(numberB, numberA);
      input = document.querySelector("#divBA");
      input.value = result;

      // a * a
      result = numberA ** 2;
      input = document.querySelector("#a2");
      input.value = result;

      // b * b
      result = numberB ** 2;
      input = document.querySelector("#b2");
      input.value = result;

      // divisores de a
      result = dividers(numberA);
      input = document.querySelector("#dividersA");
      input.value = result;

      // divisores de b
      result = dividers(numberB);
      input = document.querySelector("#dividersB");
      input.value = result;

      // a!
      result = factorial(numberA);
      input = document.querySelector("#factorialA")
      input.value = result;
     
      // b!
      result = factorial(numberB)
      input = document.querySelector("#factorialB")
      input.value = result;
   }
}

function divide(num1, num2){
   return num2 === 0 ? 'divisão por 0' : (num1/num2).toFixed(2);
}

function dividers(num){
   var dividers = [];
   for(i=1; i<=num; i++){
      if(num % i === 0) {
         dividers.push(i);
      }
   }
   return dividers.join(", ") + " ("+ dividers.length +")";
}

function factorial(num){
   var result;
   if (num > 21) {
      result = "Número muito grande.";
   } else {
      result = 1;
      for (i=1; i<=num; i++) {
         result *= i;
      }
   }
   return result;
}