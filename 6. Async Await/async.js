//Ejercicio 6.1: Crea una función esperarSegundos(segundos) que use setTimeout con async/await.

// Función que devuelve una promesa con setTimeout
function esperarSegundos(segundos) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Han pasado ${segundos} segundos`);
      }, segundos * 1000); // Convertimos segundos a milisegundos
    });
  }
  
  // Función async que utiliza await para esperar
  async function ejecutarEspera() {
    console.log("Esperando...");
    const mensaje = await esperarSegundos(3); // Espera 3 segundos
    console.log(mensaje);
  }
  
  // Llamamos a la función async
  ejecutarEspera();

  