

//obtener los ultimos 20 años
const YEARMAX = new Date().getFullYear()
export const YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index);





// -------------------------------------------------------------------
const aniSelector = document.querySelector("select[name='anio-selector']")
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




selectMarcas.onchange = () =>{
    let indexMarca = selectMarcas.options.selectedIndex -1;
    console.log(selectMarcas.options.selectedIndex)

    buildSelectModels(listMarcas[indexMarca])
}

aniSelector.onchange = () => {

}

selectModelos.onchange = () => {

}

selectVersion.onchange = () => {
    
}


cleanStorage.onclick = () => {
    localStorage.clear()
}

