// import { listChevrolette, listMarcas,listRenault,listVolksWaguen,listSeguros } from "./inicializacionListas";
function Marca(id,nombreMarca){
    this.id = id;
    this.nombreMarca = nombreMarca
    this.modelos = [];
}

function Modelo(id,nombreModelo){
    this.id = id;
    this.nombreModelo = nombreModelo;
}

function Seguro(id,nombreSeguro){
    this.id = id;
    this.nombreSeguro = nombreSeguro;
}



const chevrolette = new Marca(1,"Chevrolette")
const renault = new Marca(3,"Renault")
const volksWaguen = new Marca(2,"VolksWaguen")


const listChevrolette = ["Onix","Prisma","Cruze"];
const listVolksWaguen = ["Gol","Gol Trend","Golf"];
const listRenault = ["Clio","Kwid","Fluence"];
const listMarcas = [chevrolette,volksWaguen,renault]

const listSeguros = [" seguro contra terceros"," seguro contra terceros completo"," contra todo riesgo"]
const listSegurosObject = [];



// ------------------------------------  funcion de clase superior

function addModelsToObject(listNames,marcaActual){
    let i = 1;
    listNames.forEach(element => {
        let model = new Modelo(i,element);
        marcaActual.modelos.push(model) ;
        i++;
    });
}

function inicializarSeguros(listSeguros,listSegurosObject){
    let i = 1;
    listSeguros.forEach(element => { 
        let seguro = new Seguro(i,element);
        listSegurosObject.push(seguro)
        i++;
    })
    
    console.log(listSegurosObject);
}

addModelsToObject(listChevrolette,chevrolette);
addModelsToObject(listRenault,renault);
addModelsToObject(listVolksWaguen,volksWaguen);
inicializarSeguros(listSeguros,listSegurosObject);


// -------------------------------------------------------------------

const nombreCompleto = document.getElementById("nombre-completo"); 
const numeroPatente = document.getElementById("patente"); 
const selectMarcas = document.querySelector("select[name='marcas']");
const selectModelos = document.querySelector("select[name='modelos']")
const buttonSubmit = document.getElementById("submit")
const cleanStorage = document.getElementById("cleanStorage")

buttonSubmit.onclick = () => {
    debugger
    if(nombreCompleto.value == numeroPatente.value == "" ||
        selectMarcas.value === "Seleccione.."  ||
        selectModelos.value === "Seleccione.." ) 
    {
        console.log("vacio no se puede papa")
        return;
    }
    debugger
    const payload = {
        nombre: nombreCompleto.value,
        patente: numeroPatente.value,
        marca: listMarcas.find(elm => elm.id == selectMarcas.value).nombreMarca,

        modelo: listMarcas.find(elm => elm.id == selectMarcas.value).
                    modelos.find(elmModel => elmModel.id == selectModelos.value).nombreModelo
    }
    console.log(payload)

    debugger
    localStorage.setItem("nuevoAuto",JSON.stringify(payload));
}


listMarcas.forEach(marca => {

    let option = document.createElement("option");

    option.value = marca.id;
    option.innerText = marca.nombreMarca;

    selectMarcas.appendChild(option);

})

selectMarcas.onchange = () =>{
    let indexMarca = selectMarcas.options.selectedIndex -1;
    console.log(selectMarcas.options.selectedIndex)

    buildSelectModels(listMarcas[indexMarca])
}

function buildSelectModels(listMarcas) {
    listMarcas.modelos.forEach(modelo => {
        console.log(modelo)
        let option = document.createElement("option");

        option.value = modelo.id;
        option.innerText = modelo.nombreModelo;
        
        selectModelos.appendChild(option);
        console.log(selectModelos)
    })
}


cleanStorage.onclick = () => {
    localStorage.clear()
}

