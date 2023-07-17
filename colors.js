
let colors = []
let cuadrados = document.querySelectorAll(".square")
let clickedColor
let pickedColor
let pickRandom
let randomColor = []
let botonReset = document.querySelector("#reset")
let escondida = document.querySelector(".escondida")
let numberOfSquares = 6
let botones = document.querySelectorAll(".botones")
let container = document.querySelector(".container")
let cajaBotones = document.querySelector(".cajaBotones")

// Genera un color RGB de manera aleatoria
function randomColors (){

  let r = Math.floor(Math.random()*255)
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);

  randomColor = ["rgb("+ r +", "+ g +", " + b +")"]
}

// Genera un arreglo con colores RGB aleatorios a partir de la función anterior
function generateRandomColors(x){
      for (i=0; i<x; i++){
            randomColors()
              colors.push(randomColor)
                            }
                          }
generateRandomColors(numberOfSquares)

// Lleva todos los cuadrados y el div del título al color en x
function changeColors(x) {
  for (i=0; i< cuadrados.length; i++){
      cuadrados[i].style.backgroundColor = x
    }
  }

// Selecciona uno de los colores desplegados para mostrar su código en el título
function pickColor() {
                  colorRandom = colors[Math.floor(Math.random() * colors.length)]
                }

// Atribuye los colores aleatorios a los cuadrados y establece las condiciones para jugar
function init(){

  pickColor()
  pickedColor = colorRandom
  display = document.querySelector("#colorDisplay")
  display.textContent = pickedColor
  mensaje = document.querySelector("#message")
  mensaje.textContent = ""
  cajaBotones.style.backgroundColor = document.body.style.backgroundColor
  botonReset.textContent = "Nuevos Colores"

  for (i = 0; i < cuadrados.length; i++) {
      if (colors[i]== undefined){
        cuadrados[i].style.display = "none"
        botones[1].classList.add("selected")
        botones[0].classList.remove("selected")

        }

    else {
    cuadrados[i].style.backgroundColor = colors[i]
    cuadrados[i].style.display = "block"
    botones[1].classList.remove("selected")
    botones[0].classList.add("selected")
      }
    cuadrados[i].addEventListener("click", function(){
    clickedColor = this.style.backgroundColor

      if (clickedColor != pickedColor) {
        this.style.backgroundColor = document.body.style.backgroundColor
        mensaje.textContent = "Inténtalo nuevamente"}

      else {
        mensaje.textContent = "¡Correcto!"
        cajaBotones.style.backgroundColor = clickedColor

        changeColors(clickedColor)

        botonReset.textContent = "Volver a jugar"
      }
    }
  )
 }
}
  init()

//Función para generar nuevos colores

function reset(){
          colors = []
            generateRandomColors(numberOfSquares)

            for (i=0; i<colors.length; i++){
              randomColors()
              colors.shift()
              colors.push(randomColor)}
              init()
            }

botonReset.addEventListener("click", reset)

// Función para Botones de Fácil y Difícil
function botonesDificultad() {for(i=0; i<botones.length; i++){
botones[i].addEventListener("click", function()
  {if (this.textContent == "Fácil")
  {numberOfSquares = 3
    container.style.height = "200px"
     reset()}
  else if(this.textContent == "Difícil")
  {numberOfSquares = 6
    container.style.height = "380px"
     reset()}
      }
    )
  }
}
botonesDificultad()
