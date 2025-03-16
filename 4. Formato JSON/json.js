//Ejercicio 4.1: Crea un objeto JavaScript que represente un libro (con título, autor y año) y conviértelo a JSON.
// Crear el objeto libro
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967
  };
  
  // Convertir el objeto a JSON
  const libroJSON = JSON.stringify(libro);
  
  console.log(libroJSON);
//Ejercicio 4.2: Dado el JSON '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}', conviértelo a objeto y muestra la edad.
// JSON proporcionado
const jsoon = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}';

// Convertir el JSON a objeto
const persona = JSON.parse(json);

// Mostrar la edad
console.log(persona.edad);
//Ejercicio 4.3: Parsea el JSON '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]' y lista los productos.
// JSON proporcionado
const json = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';

// Parsear el JSON a un array de objetos
const productos = JSON.parse(json);

// Listar los productos
productos.forEach(producto => {
  console.log(producto.producto);
});
