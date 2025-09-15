// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//1. Declarar al array
let amigos = [];

// Función para agregar un nombre al array
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

// Validar que no esté vacio
  if (nombre === "") {
    alert("¡Por favor, Inserte un Nombre Valido!");
    return;
 }

//Validar que solo tenga letras y espacios
let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
if (!regex.test(nombre)) {
  alert("El nombre solo puede contener letras y espacios");
  input.value = "";
  return;
 }

//Evitar nombres repetidos
  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue ingresado");
    input.value="";
    return;
 }

  amigos.push(nombre);  // Añadimos al array
//Mostrar en consola el array actualizado
console.log("Lista actual de amigos:", amigos);

  mostrarLista();       // Mostramos en pantalla
  input.value = "";     // Limpiamos el input
}

// Función que recorre el array y agrega <li> con botón eliminar
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];

    // Crear botón eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.className = "btn-delete";
    btnEliminar.onclick = function() {
      eliminarAmigo(i);
    };

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  }
}

// Función para eliminar un amigo del array
function eliminarAmigo(indice) {
  amigos.splice(indice, 1);  // Eliminar del array
  mostrarLista();            // Actualizar la lista
}   

// ✅ Función para sortear un amigo
function sortearAmigo() {
  // 1. Validar que haya amigos en la lista
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear");
    return;
  }

  // 2. Generar un índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  let seleccionado = amigos[indice];

  // Mostrar el indica y el amigo sorteado en consola
  console.log("Indice sorteado:", indice);
  console.log("Amigo seleccionado:", seleccionado);

  // 4. Mostrar el resultado
  document.getElementById("resultado").innerHTML = 
    `El amigo secreto es: <strong>${seleccionado}</strong>`;

  // Ver el estado del array antes de reiniciar
  console.log("Array antes de reiniciar:", amigos);  

  // 5. Reiniciar el juego - vaciar lista y arreglo
  amigos = [];
  document.getElementById("listaAmigos").innerHTML="";
  
  //Confirmar reinicio
  console.log("Array despues de reiniciar:", amigos);
}