import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector("textarea") //selecciona todo el componente
const couterlist = document.querySelector("ul").getElementsByTagName("li") 
textarea.addEventListener("input", () => {

  const text = textarea.value //Trae el valor del componente
  const wordCount = analyzer.getWordCount(text)
  const characterCount = analyzer.getCharacterCount(text)
  const deleteSpace = analyzer.getCharacterCountExcludingSpaces(text)
  const average = analyzer.getAverageWordLength(text)
  const number = analyzer.getNumberCount(text)
  const add = analyzer.getNumberSum(text)

    
  couterlist[2].textContent = `Palabras: ${wordCount}` //trae las palabras
  couterlist[0].textContent = `Caracteres: ${characterCount}`
  couterlist[1].textContent = `Caracteres sin espacio: ${deleteSpace}`
  couterlist[5].textContent = `Promedio longitud: ${average}`
  couterlist[3].textContent = `Números: ${number}`
  couterlist[4].textContent = `Suma Números: ${add}`
})