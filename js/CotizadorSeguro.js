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

const nombreCompleto = document.querySelector("#nombre-completo"); 
const numeroPatente = document.getElementById("#patente"); 
const listaMarcas = document.querySelector("#lista-marcas");
const listaModelos = document.querySelector("#lista-modelos")
const buttonSubmit = document.querySelector("#submit")
const buttonReset = document.querySelector("#reset")
 
nombreCompleto.onchange = () => {
    debugger
    let ownerName = nombreCompleto.value;
    console.log(ownerName);
}

numeroPatente.onchange = () => {
    let numeroPatenteRecibido = numeroPatente.value;
    console.log(numeroPatenteRecibido);
}




console.log(nombreCompleto);



