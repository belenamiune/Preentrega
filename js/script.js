// Variables de scope global que se utilizarán en varias funciones del código
let text = "";
let currentProduct;

// Array de Objetos de los libros disponibles
let books = [ 
    {
        id: 1,
        autor: "Gabriel Garcia Marquez",
        name: "En Agosto nos vemos",
        price: 20000
    
    },
    {
        id: 2,
        autor: "Lydia Davis",
        name: "El final de la historia",
        price: 24000
       
    },
    {
        id: 3,
        autor: "Gabriel Rolón",
        name: "El duelo",
        price: 17000
       
    },
    {
        id: 4,
        autor: "Mariano Rojas Estapen",
        name: "Como hacer que te pasen cosas buenas",
        price: 30000
       
    },
    {
        id: 5,
        autor: "Florencia Bonelli",
        name: "La casa Neville: No quieras nada vil",
        price: 310000
       
    },
]

// Mensaje de bienvenida con el nombre ingresado por el usuario
let userName = prompt("Introduce tu nombre, por favor");
alert("¡Hola " + userName + ", encantado de verte!");

// Instrucción para el usuario
alert("Selecciona el botón que se encuentra en la pantalla para poder ver la lista de libros disponibles");


// Función que imprime en pantalla a modo de lista los elementos del array con el nombre, autor y precio.
// Invoca a la función showBuyButton para que se cree el botón en pantalla para poder proceder con la compra
showBooks = () => {
    showBuyButton();
    for (var i = 0; i < books.length; i++) {
        text += '<li class="list-group-item">'+books[i].name + " - " +books[i].autor+  " - $" + books[i].price+'</li>';
    }
    document.getElementById("booksList").innerHTML = text;   
}


// Función que crea el botón "Comprar"
showBuyButton = () => {
    var button= document.createElement("button");
    button.innerHTML = "Comprar"
    button.className = "btn btn-success btn-sm";
    document.body.appendChild(button);
    button.addEventListener("click", findBook)
}


// Pide al usuario ingresar el nombre. Lo busca en el array con el método find, en caso verdadero lo asigna a la variable
// currentProduct, en caso falso muestra un alert
// invoca la función BuyBook
findBook = () => {
    let bookName = prompt("Ingrese el nombre del libro que desea comprar");
    const isBookAvailable = books.find(producto => producto.name === bookName);

    if(isBookAvailable) {
       currentProduct = isBookAvailable;
       buyBook();  
    } else {
        alert("No se encontraron libros con ese nombre. Intentelo de nuevo");
    }
}


// Pide al usuario ingresar la cantidad de ejemplares que desea comprar. Calcula el total
// muestra un alert con el detalle de la compra y lo invita a participar por un juego mediante un confirm
// muestra un alert en el caso de ingresar una cantidad inválida
buyBook = () => {
    let amount = prompt("Ingrese la cantidad de ejemplares de "  + "'" + currentProduct.name + "'" + " que desea comprar:");

    if (!isNaN(amount) && parseInt(amount) > 0) {
        amount = parseInt(amount);
        let total = currentProduct.price * amount;
        alert("Detalle de la compra:\n\nProducto: " + currentProduct.name + "\nAutor: " + currentProduct.autor + "\nPrecio: $" + currentProduct.price + "\nCantidad: " + amount + "\nTotal: $" + total);
        alert("¡Muchísimas gracias por su compra!")
        let getUserAnswer = confirm("Con su compra está participando por un libro. Seleccione 'OK' para seguir participando");
        if(getUserAnswer) {
            guessNumber();
        } else {
            alert("Nos vemos pronto");
        }
    } else {
        alert("La cantidad ingresada no es válida.");
    }
}


// Función que genera un número aleatorio. Pide al usuario adivinar dicho número
guessNumber = () => {
    let randomNumber = parseInt(Math.random()* 100)+1;
    let number, attempts = 5;
    
    do {
        number = prompt(
          `Ingrese un número (quedan ${attempts} intentos):`
        );
      } while(randomNumber != number && --attempts > 0);
      if (randomNumber == number){
        alert("¡Acertaste, te ganaste un libro! Te estaremos contactando para enviarte tu premio");
      } else {
        alert(`Te quedaste sin intentos. El número era ${randomNumber}; Buena suerte para la próxima`);
      }
}