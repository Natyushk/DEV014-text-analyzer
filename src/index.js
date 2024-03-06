import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const btnreset = document.getElementById ("reset-button")
console.log(btnreset)
const textarea = document.querySelector("textarea") //selecciona todo el componente
const couterlist = document.querySelector("ul").getElementsByTagName("li") 
textarea.addEventListener("input", () => {

  const text = textarea.value //Trae el valor del componente
  const wordCount = analyzer.getWordCount(text)
  const characterCount = analyzer.getCharacterCount(text)
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text)
  const average = analyzer.getAverageWordLength(text)
  const number = analyzer.getNumberCount(text)
  const add = analyzer.getNumberSum(text)

    
  couterlist[2].textContent = `Palabras: ${wordCount}` //trae las palabras
  couterlist[0].textContent = `Caracteres: ${characterCount}`
  couterlist[1].textContent = `Caracteres sin espacio: ${characterCountExcludingSpaces}`
  couterlist[5].textContent = `Promedio longitud: ${average}`
  couterlist[3].textContent = `Números: ${number}`
  couterlist[4].textContent = `Suma Números: ${add}`
})

// Definir la función para limpiar el texto
function limpiar() {
  textarea.value = ''; // Establecer el valor del textarea como una cadena vacía
  couterlist[2].textContent = `Palabras: 0` //trae las palabras
  couterlist[0].textContent = `Caracteres: 0`
  couterlist[1].textContent = `Caracteres sin espacio: 0`
  couterlist[5].textContent = `Promedio longitud: 0`
  couterlist[3].textContent = `Números: 0`
  couterlist[4].textContent = `Suma Números: 0`
}
btnreset.addEventListener('click',limpiar)