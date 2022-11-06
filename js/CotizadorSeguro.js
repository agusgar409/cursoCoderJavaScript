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
    debugger
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



function cotizador(){
    let option
    
    while(option != "4"){
        
        option= prompt('Bienvenido, indiquenos que accion quiere realizar: \n 1-cotizar auto. \n 2-consulta cotizacion. \n 3-seguros desponibles. \n 4-Salir de la cotizacion');

        if(option == "4"){
            break;
        }
        
        switch (option) {
            case "1":
                cotizarAuto();
                break;
            case "2":
                alert("En mantenimiento jaja");
                break;
            case "3":
                showSeguros();
                break;
            default:
                alert("la opcion es incorrecta, seleccione otra vez")
                break;
        }
    }
}

function cotizarAuto (){
    let modelo;
    let marca;
    let anio;

    while(marca != "4"){

        marca = prompt("ingrese la marca del auto. \n Tenemos las siguientes opciones disponibles: \n 1 - Chevrolette. \n 2 - VolksWaguen \n 3 - Renault \n 4 - para volver atras");

        switch(marca){
            case "1":
                modelo = prompt("ingrese el modelo del auto. \n Tenemos las siguientes opciones disponibles: \n 1 - Onix \n 2 - Prisma \n 3 - Cruze \n x - para volver atras");
                break
            case "2":
                modelo = prompt("ingrese el modelo del auto. \n Tenemos las siguientes opciones disponibles: \n 1 - Gol \n 2 - Gol Trend \n 3 - Golf \n x - para volver atras");
                break
            case "3":
                modelo = prompt("ingrese el modelo del auto. \n Tenemos las siguientes opciones disponibles: \n 1 - Clio \n 2 - Kwid \n 3 - Fluence \n x - para volver atras");
                break
            default:
                break
        }

        while(modelo != "4" || modelo != undefined){
            anio = prompt("ingrese el año del auto. \n x - para volver atras");

            if(anio =="x" || anio == "X"){
                break
            }else{
                crearCotizacion((modelo-1),(marca-1),anio);
            }
        }
        if(modelo == "4"){
            break
        }
    }

}

function crearCotizacion(modelo,marca,anio){
    
    if(anio < "2005" && anio != null){
        console.log(listMarcas[marca].nombreMarca)
        alert("El auto "+ listMarcas[marca].nombreMarca + " " + listMarcas[marca].modelos[modelo].nombreModelo + " con año "+ anio +" puede tener el tipo de seguro basico, " + listSegurosObject[0].nombreSeguro);
    }
    else {
        debugger
        console.log(listMarcas[marca].nombreMarca)
        alert("El auto "+ listMarcas[marca].nombreMarca + " " + listMarcas[marca].modelos[modelo].nombreModelo + " con año "+ anio +" puede tener el tipo de seguro intermedio, " + listSegurosObject[1].nombreSeguro + " o nuestro mejor seguro " +listSegurosObject[2].nombreSeguro);
        
    }
}

function showSeguros() {
    alert("los seguros disponibles son: \n" +listSegurosObject[0].nombreSeguro + "\n"+listSegurosObject[1].nombreSeguro+"\n"+listSegurosObject[2].nombreSeguro)
}

console.log(cotizador());



