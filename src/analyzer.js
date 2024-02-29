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
    text = text.trim(); // Eliminar espacios en blanco del principio y final del texto
    const words = text.split(" "); // Dividir el texto en palabras utilizando el espacio como delimitador
    let totalLength = 0; // Inicializar una variable para almacenar la suma de las longitudes de las palabras
    words.forEach(word => { // Iterar sobre cada palabra en el array de palabras
      totalLength += word.length; // Sumar la longitud de cada palabra a totalLength
    });
    const average = totalLength / words.length; // Calcular el promedio dividiendo la suma de las longitudes por el número de palabras
    return parseFloat(average.toFixed(2)); // Devolver el promedio como un número redondeado a 2 decimales

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //declarar un campo array/lista
    /*     const numbers = [] //variable que se inicializa como un arreglo vacio
        for (let i = 0; i < text.length; i++) { //para iterar y que el valor sume 1
          if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(text[i])) { //si encontro un numero
            //Verifica si es una lista de numeros)
            let number = ""
            do {
              number += text[i] //concatena la cadena de lo consultado anteriormente en el elemeto text en la posición i
              i++
            } while (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(text[i]) && i < text.length) //para seguir iterando
            //Verifica si es una lista de numeros
            if (number !== "" || text[i-1]=== " "){ //si el numero es distinto de vacio
              console.log(i, text[i])
              numbers.push(number) }//guarda el numero al final de la ultima posicion del arreglo
            i-- //
          }
        } */

    const word = text.split(" ")
    let numbers = []
    let numberLength = 0

    for (let i = 0; i < word.length; i++) {
      const number = word[i]
      console.log(number)
      for (let j = 0; j < number.length; j++) {
        console.log(number[j])
        if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(number[j])) {
          numberLength = numberLength === 0? 0: numbers.length-1
          break
        }
        let iterationNumber = ""
        do {
          iterationNumber += number[j]
          j++
        }
        while (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(number[j]) && j < number.length) {
          if (iterationNumber !== "") {
            numbers.push(iterationNumber)
            numberLength = numbers.length
          }
        }
      }
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

