

//obtener los ultimos 20 años
const YEARMAX = new Date().getFullYear()
const YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index);



// -------------------------------------------------------------------
const anioSelector = document.querySelector("select[name='anio-selector']")
const selectMarcas = document.querySelector("select[name='marca']");
const selectModelos = document.querySelector("select[name='modelo']")
const selectVersion = document.querySelector("select[name='version']")

const buttonSubmit = document.getElementById("submit")
const cleanStorage = document.getElementById("cleanStorage")





buttonSubmit.onclick = () => {
    
    if(nombreCompleto.value == numeroPatente.value == "" ||
        selectMarcas.value === "Seleccione.."  ||
        selectModelos.value === "Seleccione.." ) 
    {
        console.log("vacio no se puede papa")
        return;
    }
    
    const payload = {
        // nombre: nombreCompleto.value,
        // patente: numeroPatente.value,
        // marca: listMarcas.find(elm => elm.id == selectMarcas.value).nombreMarca,

        // modelo: listMarcas.find(elm => elm.id == selectMarcas.value).
        //             modelos.find(elmModel => elmModel.id == selectModelos.value).nombreModelo
    }
    console.log(payload)

    
    localStorage.setItem("nuevoAuto",JSON.stringify(payload));
}

const cleanSelectModel = () => {

    var options = document.querySelectorAll('#modelo option');
    options.forEach(o => {
        debugger
        console.log(o)
        o.value !== ""? 
        o.remove()
        :
        o.selected = true
    });

}

const cleanSelectVercion= () => {

    var options = document.querySelectorAll('#version option');
    options.forEach(o => {
        debugger
        console.log(o)
        o.value !== ""? 
        o.remove()
        :
        o.selected = true
    });
}


selectMarcas.onchange = (evt) =>{
    cleanSelectModel()
    cleanSelectVercion()

    const value = evt?.target?.value
    obtenerModelosPorMarca(value)
}

anioSelector.onchange = () => {

}

selectModelos.onchange = (evt) => {
    cleanSelectVercion()

    const value = evt?.target?.value
    obtenerVercionesPorModelo(value)
}

// selectVersion.onchange = () => {
    
// }


// cleanStorage.onclick = () => {
//     localStorage.clear()
// }

const urlMarcas = "/js/data/marcas.json"
const urlModelos = "/js/data/modelos.json"
const urlVerciones = "/js/data/verciones.json"

//--------------fetch data -------------------

function obtenerVercionesPorModelo(idModelo) {
    console.log(idModelo)
    fetch(urlVerciones)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        data.map(elm => {
            
            if(elm?.idModelo == idModelo){
                let option = document.createElement("option");
                option.value = elm.id;
                option.innerText = elm.nombreVercion;
                console.log(elm)
                selectVersion.appendChild(option);
            }
        })
    })
}


function obtenerModelosPorMarca(idMarca) {
    console.log(idMarca)
    fetch(urlModelos)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        data.map(elm => {
            
            if(elm?.idMarca == idMarca){
                let option = document.createElement("option");
                option.value = elm.id;
                option.innerText = elm.nombreModelo;
                console.log(elm)
                selectModelos.appendChild(option);
            }
        })
    })
}

fetch(urlMarcas)
.then(res => res.json())
.then(data => {
    data?.map(elm => {
        let option = document.createElement("option");
        option.value = elm.id;
        option.innerText = elm.nombreMarca;
        console.log(elm)
        selectMarcas.appendChild(option);
    })
})

YEARS.map(elm => {
    let option = document.createElement("option");
    option.value = elm;
    option.innerText = elm;
    console.log(elm)
    anioSelector.appendChild(option);
})

//-------------- end fetch data -------------------
