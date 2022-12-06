

//obtener los ultimos 20 años
const YEARMAX = new Date().getFullYear()
const YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index);



// -------------------------------------------------------------------
const selectAnio = document.querySelector("select[name='anio-selector']")
const selectMarcas = document.querySelector("select[name='marca']");
const selectModelos = document.querySelector("select[name='modelo']")
const selectVersion = document.querySelector("select[name='version']")

const buttonSubmit = document.getElementById("submit")
const cleanStorage = document.getElementById("cleanStorage")

const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const mail = document.getElementById("email")
const codArea = document.getElementById("codArea")
const telefono = document.getElementById("nroTelefono")


buttonSubmit.onclick = () => {
    debugger
    if(nombre?.value === apellido?.value === null ||
        selectMarcas?.value === "Seleccioná"  ||
        selectModelos?.value === "Seleccioná" ) 
    {
        console.log("vacio no se puede papa")
        return;
    }
    debugger
    
    const payload = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: mail.value,
        codArea: codArea.value,
        telefono: telefono.value,
        marca: selectMarcas.value,
        modelo: selectModelos.value,
        vercion: selectVersion.value, 
        anio: selectAnio.value
    }
    console.log(payload)

    
    localStorage.setItem("nueva_cotizacion",JSON.stringify(payload));
}

const cleanSelectModel = () => {

    var options = document.querySelectorAll('#modelo option');
    options.forEach(o => {
        o.value !== ""? 
        o.remove()
        :
        o.selected = true
    });

}

const cleanSelectVercion= () => {

    var options = document.querySelectorAll('#version option');
    options.forEach(o => {
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

selectAnio.onchange = () => {

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
    fetch(urlVerciones)
    .then(res => res.json())
    .then(data => {
        data.map(elm => {
            
            if(elm?.idModelo == idModelo){
                let option = document.createElement("option");
                option.value = elm.id;
                option.innerText = elm.nombreVercion;
                selectVersion.appendChild(option);
            }
        })
    })
}


function obtenerModelosPorMarca(idMarca) {
    fetch(urlModelos)
    .then(res => res.json())
    .then(data => {
        data.map(elm => {
            if(elm?.idMarca == idMarca){
                let option = document.createElement("option");
                option.value = elm.id;
                option.innerText = elm.nombreModelo;
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
        selectMarcas.appendChild(option);
    })
})

YEARS.map(elm => {
    let option = document.createElement("option");
    option.value = elm;
    option.innerText = elm;
    selectAnio.appendChild(option);
})

//-------------- end fetch data -------------------
