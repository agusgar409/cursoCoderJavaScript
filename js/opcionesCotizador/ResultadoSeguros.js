const urlCotizaciones = '/js/data/cotizaciones.json'

const flexparaCotizaciones = document.getElementById("infoToShow");



fetch(urlCotizaciones)
.then(res => res.json())
.then(data => {
    data.map(elm => {
        if(chequearAntiguedad(elm)){
            console.log(elm)
            crearDomCotizacion(elm)
        }

    })
    
})


const chequearAntiguedad = (data) => {
    const infoLS = localStorage.getItem("nueva_cotizacion");
    const infoJson = JSON.parse(infoLS);
    if(data.minAntiguedad <= infoJson?.anio){
        return true;
    }
    return false;
}

const crearDomCotizacion = (data) => {
    debugger

    flexparaCotizaciones.innerHTML = `
        <div class="col-md-4 active">
            <div class="pack9">
                <div class="row">
                    <div class="col-md-12">
                        <div class="column-header text-center">
                            <h2 class="column-title">${data.nombreCotizacion}</h2>
                        </div>
                        <div class="column-price">
                            <div class="prod-price">Precio: $${data.precio}</div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="column-btn">
                            <div class="row">
                                <div class="col-xs-12">
                                    <span class="column-desc-sub">
                                        ${data.detalle}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-12">
                        <div class="column-body">
                            <div>
                                <span class="tit-incluye">Coberturas incluidas:</span>
                                <ul class="title-sm mg-t">
                                    <li>${data.coberturas[0]}</li>
                                    <li>${data.coberturas[1]}</li>
                                    <li>${data.coberturas[2]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    
    
    document.flexparaCotizaciones.appendChild(flexparaCotizaciones);
    

}



