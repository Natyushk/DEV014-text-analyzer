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
    const deleteSpace = text.replaceAll(/[,. ]/g, "") //guardo el valor sin espacios rremplazando
    return deleteSpace.length // retorna el numero de caracteres
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text.trim(); //borrar espacios del inicio y al final del texto
    const words = text.split(" ")
    const deleteSpace = text.replaceAll(" ", "")
    const average = deleteSpace.length / words.length
    return average.toFixed(2)

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const number = text.replace(/[^0-9]+/g, "")
    return number.length
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
