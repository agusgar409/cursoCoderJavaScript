// const Asegurado = (modelo,marca,anio) => {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.anio = anio;
// }

function cotizador(){
    let option
    debugger
    
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

const listChevrolette = ["Onix","Prisma","Cruze"];
const listRenault = ["Gol","Gol Trend","Golf"];
const listVolksWaguen = ["Clio","Kwid","Fluence"];
const listMarcas = ["Chevrolette","VolksWaguen","Renault"]
const listSeguros = [" seguro contra terceros"," seguro contra terceros completo"," contra todo riesgo"]

function cotizarAuto (){
    let modelo;
    let marca;
    let anio;
    debugger
    

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
        }

        while(modelo != "4" || modelo != undefined){
            anio = prompt("ingrese el año del auto. \n x - para volver atras");

            if(anio =="x" || anio == "X"){
                break
            }else{
                crearCotizacion(modelo,marca,anio);
            }
        }
        if(modelo == "4"){
            break
        }
    }

}

function crearCotizacion(modelo,marca,anio){
    
    if(anio < "2005" && anio != null){
        if(marca === "1"){
            alert("El auto "+ listMarcas[parseInt(marca)-1] + " " + listChevrolette[parseInt(modelo)-1]+ "con año "+ anio +" puede tener el tipo de seguro basico, " + listSeguros[0]);
        }else if(marca === "2"){
            alert("El auto "+ listMarcas[parseInt(marca)-1] + " " + listVolksWaguen[parseInt(modelo)-1]+ "con año "+ anio +" puede tener el tipo de seguro basico, " + listSeguros[0]);
        }else{
            alert("El auto "+ listMarcas[parseInt(marca)-1] + " " + listRenault[parseInt(modelo)-1]+ "con año "+ anio +" puede tener el tipo de seguro basico, " + listSeguros[0]);
        }
    }
    else {

        if(marca === "1"){
            alert("El auto "+ listMarcas[parseInt(marca)-1] + " " + listChevrolette[parseInt(modelo)-1] +" puede tener el tipo de seguro intermedio, " + listSeguros[1] + " o nuestro mejor seguro " +listSeguros[2]);
        }else if(marca === "2"){
            alert("El auto "+ listMarcas[parseInt(marca)-1] + " " + listVolksWaguen[parseInt(modelo)-1]+ "puede tener el tipo de seguro intermedio, " + listSeguros[1] + " o nuestro mejor seguro " +listSeguros[2]);
        }else{
            alert("El auto "+ listMarcas[parseInt(marca)-1] + " " + listRenault[parseInt(modelo)-1]+ "puede tener el tipo de seguro intermedio, " + listSeguros[1] + " o nuestro mejor seguro " +listSeguros[2]);
        }
    }
}

function showSeguros() {
    alert("los seguros disponibles son: \n" +listSeguros[0]+ "\n"+listSeguros[1]+"\n"+listSeguros[2])
}

console.log(cotizador());