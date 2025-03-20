import { facturas, todas, pendiente, pagada } from "./utilties.js";
const datosFact = document.querySelector("#datosFact")
const tod = document.querySelector("#todos")
const pendientes = document.querySelector("#pendientes")
const pagadas = document.querySelector("#pagadas")
const addContacBtn = document.querySelector("#addContactBtn")
const modal = document.querySelector("#modal")
const close = document.querySelector("#close")
const contactForm = document.querySelector("#contactForm")


function toggleModal() {
    modal.classList.toggle("show");
}

function agregarFactura(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const object = {
        id: facturas[facturas.length - 1].id + 1,
        numeroFactura: formData.get("factura"),
        descripcion: formData.get("descripcion"),
        estado: formData.get("estado"),
        fecha: formData.get("fecha")
    }
    facturas.push(object)
    todas(facturas, datosFact);
    contactForm.reset();
    toggleModal()
}

function eliminarFactura(id) {
    let etiqueta = id.target
    let nombreEtiqueta = etiqueta.tagName;
    console.log(nombreEtiqueta)
    if (nombreEtiqueta === "BUTTON") {
        let id = parseInt(etiqueta.id);
        console.log(id)
        const index = facturas.findIndex((item) => item.id === id);
        if (index >= 0) {
            facturas.splice(index, 1);
            todas(facturas, datosFact)
        }
    }
}

addContacBtn.addEventListener("click", toggleModal)
close.addEventListener("click", toggleModal)

tod.addEventListener("click", (e) => { todas(facturas, datosFact) })
pendientes.addEventListener("click", (e) => { pendiente(facturas, datosFact) })
pagadas.addEventListener("click", (e) => { pagada(facturas, datosFact) })

contactForm.addEventListener("submit", agregarFactura)
datosFact.addEventListener("click", eliminarFactura)

todas(facturas, datosFact)