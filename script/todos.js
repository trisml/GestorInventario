//Autor: Tristán Marin Lopez (Estudiante)
//GitHub: https://github.com/trisml/GestorInventario.git



const getRandomQuantity = () => {
  return (Math.random() * 30 + 1).toFixed(0);
};

let inventario = [
  { id: 1, nombre: "Mario", cantidad: getRandomQuantity(), precio: 79.95 },
  { id: 2, nombre: "Luigi", cantidad: getRandomQuantity(), precio: 69.99 },
  { id: 3, nombre: "Yoshi", cantidad: getRandomQuantity(), precio: 59.81 },
  { id: 4, nombre: "Pac-Man", cantidad: getRandomQuantity(), precio: 44.99 },
  { id: 5, nombre: "Zelda", cantidad: getRandomQuantity(), precio: 44.83 },
  { id: 6, nombre: "Kratos", cantidad: getRandomQuantity(), precio: 39.99 },
  { id: 7, nombre: "Princesa Peach", cantidad: getRandomQuantity(), precio: 125 },
  { id: 8, nombre: "Sonic", cantidad: getRandomQuantity(), precio: 15.99 },
  { id: 9, nombre: "Link", cantidad: getRandomQuantity(), precio: 59.99 },
  { id: 10, nombre: "Harley Quinn", cantidad: getRandomQuantity(), precio: 54.99 },
  { id: 11, nombre: "Joker", cantidad: getRandomQuantity(), precio: 44.99 },
  { id: 12, nombre: "Lara Croft", cantidad: getRandomQuantity(), precio: 49.99 },
  { id: 13, nombre: "Pikachu", cantidad: getRandomQuantity(), precio: 46.99 },
  { id: 14, nombre: "Samus", cantidad: getRandomQuantity(), precio: 49.99 },
  { id: 15, nombre: "Sora", cantidad: getRandomQuantity(), precio: 51.95 },
  { id: 16, nombre: "Master Chief", cantidad: getRandomQuantity(), precio: 59.99 },
  { id: 17, nombre: "Minecraft Steve", cantidad: getRandomQuantity(), precio: 29.99 },
  { id: 18, nombre: "Ezio Auditore", cantidad: getRandomQuantity(), precio: 25.32 },
  { id: 19, nombre: "Kratos", cantidad: getRandomQuantity(), precio: 59.99 },
  { id: 20, nombre: "Donkey Kong", cantidad: getRandomQuantity(), precio: 32.99 },
  { id: 21, nombre: "Zombi", cantidad: getRandomQuantity(), precio: 56.39 },
  { id: 22, nombre: "Nathan Drake", cantidad: getRandomQuantity(), precio: 44.99 },
  { id: 23, nombre: "Super Mario", cantidad: getRandomQuantity(), precio: 57.46 },
  { id: 24, nombre: "Link (Toon)", cantidad: getRandomQuantity(), precio: 39.99 },
  { id: 25, nombre: "Ghost of Tsushima", cantidad: getRandomQuantity(), precio: 99.99 },
];

const inventoryContainer = document.getElementById("inventory");
let searchQuery = ""; 

renderInventory();

function createInventory(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <h2>${product.nombre}</h2>
      <p>Stock: ${product.cantidad}</p>
      <p>${product.precio}€</p>
      <button style="display: inline" id="btnEditar-${product.id}">Editar</button>
      <button style="display: inline" id="btnBorrar-${product.id}">Eliminar</button>
      <button style="display: none" id="btnCancelar-${product.id}">Cancelar</button>
    `;
    

    inventarioTotal(inventario)
    
    

  
  const btnEditar = card.querySelector(`#btnEditar-${product.id}`);
  btnEditar.addEventListener("click", () => {
    btnEditar.style.display = "none";
    const btnEliminar = document.getElementById(`btnBorrar-${product.id}`);
    const btnConfirmar = document.getElementById("btnConfirmar");
    const btnCancelar = document.getElementById(`btnCancelar-${product.id}`);
    btnEliminar.style.display = "none";
    btnAñadir.style.display = "none";
    btnConfirmar.style.display ="inline"
    btnCancelar.style.display ="inline"
    const nomProduct = document.getElementById("nameAñadir");
    const cantProduct = document.getElementById("cantidad");
    const precioProduct = document.getElementById("precio");
    nomProduct.placeholder = product.nombre;
    cantProduct.placeholder = product.cantidad;
    precioProduct.placeholder = product.precio;
        btnCancelar.addEventListener("click", () =>{
          btnCancelar.style.display = "none";
          btnAñadir.style.display = "inline";
          btnConfirmar.style.display = "none";
          btnEditar.style.display = "inline";
          btnEliminar.style.display = "inline";
          nomProduct.placeholder = "";
          cantProduct.placeholder = "";
          precioProduct.placeholder = "";
        })
        btnConfirmar.addEventListener("click", () => {
          btnEditar.style.display = "inline";
          btnEliminar.style.display = "inline";
          btnAñadir.style.display = "inline";
          btnConfirmar.style.display ="none"
          btnCancelar.style.display ="none"
          
            product.nombre = nomProduct.value;
            product.cantidad = cantProduct.value;
            product.precio = precioProduct.value;

            nomProduct.placeholder = "";
            cantProduct.placeholder = "";
            precioProduct.placeholder = "";
            nomProduct.value = "";
            cantProduct.value = "";
            precioProduct.value = "";

            renderInventory();
        })
  });

  return card;
}
const btnBuscar = document.getElementById("botonBuscar");
btnBuscar.addEventListener("click", () => {
  searchQuery = document.getElementById("nameBuscar").value;
  renderInventory();
});

function renderInventory() {
  // Limpia el contenedor de inventario
  inventoryContainer.innerHTML = "";

  // Itera sobre los productos en el inventario
  inventario.forEach((product) => {
    // Si el producto coincide con la búsqueda o si no se realizó ninguna búsqueda
    if (!searchQuery || product.nombre.toLowerCase().includes(searchQuery.toLowerCase())) {
      const card = createInventory(product);
      inventoryContainer.appendChild(card);

      const btnBorrar = document.getElementById(`btnBorrar-${product.id}`);
      btnBorrar.addEventListener("click", () => {
        const divPadre = btnBorrar.parentElement;
        inventoryContainer.removeChild(divPadre);

        const productId = parseInt(btnBorrar.id.split("-")[1]);
        inventario = inventario.filter((p) => p.id !== productId);
        
      });
    }
  });
}

const btnAñadir = document.getElementById("añadir");

btnAñadir.addEventListener("click", () => {
  const nomProduct = document.getElementById("nameAñadir");
  const cantProduct = document.getElementById("cantidad");
  const precioProduct = document.getElementById("precio");

  // Agrega un nuevo producto al inventario
  const newProduct = {
    id: inventario.length + 1,
    nombre: nomProduct.value,
    cantidad: cantProduct.value,
    precio: parseFloat(precioProduct.value),
  };
  inventario.push(newProduct);

  renderInventory();
});
const btnInventario = document.getElementById("añaddir");
btnInventario.addEventListener("click", () => {
  const mensaje = document.getElementById("mensaje");
  if (mensaje.style.display === "none" || mensaje.style.display === "") {
    const totalInventario = inventarioTotal(inventario);
    mensaje.innerText = `El valor total del inventario es: ${totalInventario.toFixed(2)}€`;
    mensaje.style.display = "inline"; // Mostrar el elemento
    const formulario = document.getElementById("formulario");
    formulario.offsetHeight= "fit-content";
  } else {
    mensaje.style.display = "none"; // Ocultar el elemento
  }
});



    function inventarioTotal(inventario)  {
      return inventario.reduce((total, product) => total + (product.cantidad * product.precio), 0);
    };