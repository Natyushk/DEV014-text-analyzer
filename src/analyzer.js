const analyzer = {
  getWordCount: (text) => {
    // Dividir el texto en palabras usando un regex que identifica los espacios en blanco y signos de puntuación como separadores
    text.trim(); //borrar espacios del inicio y al final del texto
    const words = text.split(" ")
    // Retornar la longitud del array de palabras
    return words.length;
  },


  getCharacterCount: (text) => {
    // Retornar la longitud del texto, que es el recuento de caracteres
    text.trim()
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    text.trim()
    let characterCount = 0; //inicializa una variable para almacenar el recurso de caracteres
    //itera sobre cada caracter en el texto
    for (let i = 0; i < text.length; i++) {
      const chart = text[i];

      //Verifica si el carácter actual no es un espacio ni un signo de puntuación
      if (chart !== ' ' && !['.', ','].includes(chart)) {
        // Incrementa el contador de caracteres
        characterCount++;
      }
    }
    return characterCount // retorna el numero de caracteres
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text.trim(); //borrar espacios del inicio y al final del texto
    const words = text.split(" ")
    const deleteSpace = text.replaceAll(" ", "")
    const average = deleteSpace.length / words.length
    return parseFloat(average.toFixed(2))
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //declarar un campo array/lista
    const numbers = [] //pregunta si es un numero
    for (let i = 0; i < text.length; i++) {
      const chart = text[i];
      let number= ""
      do {
        console.log (number)
        number += chart
        i++
      } while (["0","1","2","3","4","5","6","7","8","9","."].includes(chart) && i< text.length)
      //Verifica si es una lista de numeros
      if (number !== "")
        numbers.push(number)
      i++
    }
    return numbers.length
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const number = text.match(/\d+/g, "")
    if (number) {
      const add = number.map(Number).reduce((total, number) => total + number, 0)
      return add
    }
    return 0
  },
};

export default analyzer;
