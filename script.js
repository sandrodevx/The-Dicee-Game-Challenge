// Función para lanzar los dados
function rollDice() {
    // Seleccionar las imágenes de los dados
    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");
  
    // Aplicar animación de giro
    image1.classList.add("spin");
    image2.classList.add("spin");
  
    // Deshabilitar el botón mientras se realiza la animación
    var rollButton = document.getElementById("rollDice");
    if (rollButton) {
      rollButton.disabled = true;
    }
  
    // Quitar la animación después de 0.5 segundos
    setTimeout(() => {
      // Detener la animación
      image1.classList.remove("spin");
      image2.classList.remove("spin");
  
      // Generar números aleatorios para los dados
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
      // Cambiar las imágenes de los dados
      image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
      image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
  
      // Determinar el resultado
      determineWinner(randomNumber1, randomNumber2);
  
      // Habilitar el botón nuevamente
      if (rollButton) {
        rollButton.disabled = false;
      }
    }, 500); // 0.5 segundos
  }
  
  // Función para determinar el ganador
  function determineWinner(randomNumber1, randomNumber2) {
    var resultText = document.querySelector("h1");
  
    if (randomNumber1 > randomNumber2) {
      resultText.innerHTML = "🚩 Player 1 Wins!";
      resultText.classList.add("winner");
      resultText.classList.remove("draw");
    } else if (randomNumber2 > randomNumber1) {
      resultText.innerHTML = "Player 2 Wins! 🚩";
      resultText.classList.add("winner");
      resultText.classList.remove("draw");
    } else {
      resultText.innerHTML = "Draw!";
      resultText.classList.add("draw");
      resultText.classList.remove("winner");
    }
  }
  
  // Evento para lanzar los dados al hacer clic en el botón
  var rollButton = document.getElementById("rollDice");
  if (rollButton) {
    rollButton.addEventListener("click", rollDice);
  }
  
  // Evento para lanzar los dados al presionar la tecla "Espacio"
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      rollDice();
    }
  });