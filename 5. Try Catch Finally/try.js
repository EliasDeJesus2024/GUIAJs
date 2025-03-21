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
  
  console.log(dividir(10, 2));  
  console.log(dividir(10, 0)); 
  
  try {
    
    console.log(variableNoDefinida);
  } catch (error) {
    
    console.log("Error: " + error.message);
  }¨  {

   
    let resultado = 10 / 2;
    console.log("Resultado: " + resultado);

  } catch (error) {
  
    console.log("Error capturado: " + error.message);
  } finally {
   
    console.log("Este mensaje siempre se imprimirá.");
  }
  