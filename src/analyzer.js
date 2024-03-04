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

    /* const word = text.split(" ")
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
    } */

    const numbers = []; //Se inicializa un array vacío llamado numbers. Este array se utilizará para almacenar los números encontrados en el texto.
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."] //Se define un array llamado num que contiene todos los caracteres que pueden formar parte de un número, incluyendo los dígitos del 0 al 9 y el punto decimal.

    for (let i = 0; i < text.length; i++) { //Comienza un bucle for que iterará sobre cada carácter del texto.
      if (num.includes(text[i])) {  //Se verifica si el carácter actual (text[i]) está incluido en el array num. Si es así, indica que es un carácter numérico o un punto decimal.
        let numer = ""; //Se inicializa una variable llamada numer que se utilizará para construir el número encontrado.
        const betweenlettersbefore = i > 0 && isNaN(text[i - 1]); //Se definen dos variables booleanas que indican si el carácter actual está entre letras (no es parte de una palabra) antes y después.
        const betweenlettersafter = i + 1 === text.length || isNaN(text[i + 1]);

        if (!betweenlettersbefore && !betweenlettersafter) { //Se verifica si el carácter actual no está entre letras antes ni después. Esto indica que el carácter actual es parte de un número.
          do { //Se utiliza un bucle do-while para construir el número completo. Se continúa agregando caracteres al número (numer) mientras el carácter actual sea numérico o un punto decimal y mientras no se llegue al final del texto.
            numer += text[i];
            i++;
          } while (num.includes(text[i]) && i < text.length);

          if (numer.endsWith('.')) { //Se verifica si el número termina con un punto decimal. Si es así, se elimina el punto decimal para evitar errores de conversión a número.
            numer = numer.slice(0, -1);
          }

          if (!isNaN(Number(numer.trim())) && (text[i] === undefined || !isNaN(text[i]))) { //Se verifica si el contenido de numer (después de recortar espacios en blanco) es un número válido y si el siguiente carácter después del número es indefinido o es un número. Si se cumple, el número se convierte en un número y se agrega al array numbers.
            numbers.push(Number(numer));
          }
          i--; //Se decrementa i para que el bucle principal no avance dos veces consecutivas.
        }
      }
    }
    return numbers.length
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = []; //Se inicializa un array vacío llamado numbers. Este array se utilizará para almacenar los números encontrados en el texto.
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."] //Se define un array llamado num que contiene todos los caracteres que pueden formar parte de un número, incluyendo los dígitos del 0 al 9 y el punto decimal.

    for (let i = 0; i < text.length; i++) { //Comienza un bucle for que iterará sobre cada carácter del texto.
      if (num.includes(text[i])) {  //Se verifica si el carácter actual (text[i]) está incluido en el array num. Si es así, indica que es un carácter numérico o un punto decimal.
        let numer = ""; //Se inicializa una variable llamada numer que se utilizará para construir el número encontrado.

        do { //Se utiliza un bucle do-while para construir el número completo. Se continúa agregando caracteres al número (numer) mientras el carácter actual sea numérico o un punto decimal y mientras no se llegue al final del texto.
          numer += text[i];
          i++;
        } while (num.includes(text[i]) && i < text.length);

        if (numer.endsWith('.')) { //Se verifica si el número termina con un punto decimal. Si es así, se elimina el punto decimal para evitar errores de conversión a número.
          numer = numer.slice(0, -1);
        }

        if (!isNaN(Number(numer.trim())) && (text[i] === undefined || !isNaN(text[i]))) { //Se verifica si el contenido de numer (después de recortar espacios en blanco) es un número válido y si el siguiente carácter después del número es indefinido o es un número. Si se cumple, el número se convierte en un número y se agrega al array numbers.
          numbers.push(Number(numer));
        }
        i--; //Se decrementa i para que el bucle principal no avance dos veces consecutivas.
      }
    }
    const add = numbers.reduce((total, value) => total + value, 0);
    return add
  };

  export default analyzer;
