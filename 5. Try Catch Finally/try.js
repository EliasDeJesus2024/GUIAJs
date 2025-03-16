//Ejercicio 5.1: Escribe una función que divida dos números. Usa try...catch para manejar división por cero.
function dividir(a, b) {
    try {
      if (b === 0) {
        throw new Error("No se puede dividir por cero");
      }
      return a / b;
    } catch (error) {
      console.log(error.message);
    }
  }
  
  // Ejemplo de uso:
  console.log(dividir(10, 2));  // 5
  console.log(dividir(10, 0));  // No se puede dividir por cero
  //Ejercicio 5.2: Crea un bloque donde intentes acceder a una variable no definida y captura el error.
  try {
    // Intentamos acceder a una variable no definida
    console.log(variableNoDefinida);
  } catch (error) {
    // Capturamos y mostramos el error
    console.log("Error: " + error.message);
  }
//Ejercicio 5.3 (Desafío): Usa try...catch...finally para asegurar que un mensaje se imprima siempre, haya error o no.
try {
    // Intentamos realizar alguna operación que podría fallar
    let resultado = 10 / 2;
    console.log("Resultado: " + resultado); // Este es un ejemplo sin error
    // Para probar con un error, descomenta la siguiente línea
    // let errorPrueba = nonExistentVariable; 
  } catch (error) {
    // Capturamos y mostramos el error si ocurre
    console.log("Error capturado: " + error.message);
  } finally {
    // Este bloque siempre se ejecuta, independientemente de si hubo un error
    console.log("Este mensaje siempre se imprimirá.");
  }
  