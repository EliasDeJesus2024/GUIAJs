//Ejercicio 7.1: Usa fetch() para obtener datos de la API https://jsonplaceholder.typicode.com/users y muestra los nombres.

// Usar fetch() para obtener datos de la API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Comprobar si la respuesta es correcta
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    return response.json();  // Convertir la respuesta a formato JSON
  })
  .then(data => {
    // Recorrer el array de usuarios y mostrar sus nombres
    data.forEach(user => {
      console.log(user.name);  // Imprimir el nombre del usuario
    });
  })
  .catch(error => {
    // Capturar errores y mostrarlos
    console.error('Hubo un problema con la solicitud Fetch:', error);
  });

  //**Ejercicio 7.3** (Desafío): Combina `async/await` con `fetch` para obtener y mostrar datos de una API pública.
  // Función async para obtener los usuarios
async function obtenerUsuarios() {
    try {
      // Hacer la solicitud fetch y esperar a que se resuelva
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
  
      // Convertir la respuesta a JSON
      const data = await response.json();
  
      // Recorrer y mostrar los nombres de los usuarios
      data.forEach(user => {
        console.log(user.name);
      });
    } catch (error) {
      // Capturar y mostrar errores
      console.error('Hubo un problema con la solicitud Fetch:', error);
    }
  }
  
  // Llamar a la función async
  obtenerUsuarios();
  