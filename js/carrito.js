const marcarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Usted lleva:</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "(salir)";
    modalButton.className = "modal-header-button";
    modalButton.style.color = "rgb(222, 211, 70)";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.marca}</h3>
            <h4>${product.modelo}</h4>
            <p>Cantidad: ${product.cantidad}</p>
            <p>Total: ${product.cantidad * product.precio}</p>
            <span class="delete-product"> ❌ </span>
        `;
        carritoContent.style.fontFamily = "Play";
        modalContainer.append(carritoContent);

        let eliminar = carritoContent.querySelector(".delete-product");

        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
        });
    });

    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `El total de la compra es: $ ${total} dolares!`;
    totalCompra.style.fontFamily = "Play";
    modalContainer.append(totalCompra);
    

    const finalizarCompra = document.createElement("button");
    finalizarCompra.className = "final-content";
    finalizarCompra.innerText = "Finalizar Compra";
    finalizarCompra.style.fontFamily = "play";
    finalizarCompra.style.fontSize = "1rem";
    modalContainer.append(finalizarCompra);

    finalizarCompra.addEventListener("click", () => {
        Swal.fire({
            title: "Compra Finalizada",
            text: "Su compra fue un exito",
            icon: "success"
        });
        carrito = [];
        carritoContador();
        save();
        modalContainer.style.display = "none";
        modalContainer.style.innerHTML = "";
    });
};

verCarrito.addEventListener("click", marcarCarrito);

//* Funcion de eliminar producto

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoContador();
    save();
    marcarCarrito();
};

//* Contador carrito

const carritoContador = () => {
    cantidadCarrito.style.display = 'block';

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoContador();






