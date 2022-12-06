const urlCotizaciones = '/js/data/cotizaciones.json'

fetch(urlCotizaciones)
.then(res => res.json())
.then(data => {
    chequearAntiguedad()
})


const chequearAntiguedad = (data) => {
    const something = localStorage.getItem("nueva_cotizacion");
    console.log(something)
}
