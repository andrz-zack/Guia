// guardar estado (columna activa)
let columnaActiva = 1

//seleccionar columnas
const columnas = document.querySelectorAll('.columna')

//escuchar clicks en cada columna
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function() {
        console.log(columna, indice)
        cambiarColumna(indice)
    })    
});

//cambiar el estado de las columnas
function cambiarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice;
}
