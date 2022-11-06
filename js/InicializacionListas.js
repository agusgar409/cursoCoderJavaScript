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
    this.id;
    this.nombreSeguro = nombreSeguro;
}

//funcion de clase superior
function addModelsToObject(listNames,object){
    
    let i = 1;
    listNames.forEach(element => {
        let modelo = new Modelo(i,element);
        object.array.push(modelo) ;
        i++;
    });
}

const chevrolette = new Marca(1,"Chevrolette")
const renault = new Marca(2,"Renault")
const volksWaguen = new Marca(3,"VolksWaguen")
const seguros = new Seguro()

const listChevrolette = ["Onix","Prisma","Cruze"];
const listRenault = ["Gol","Gol Trend","Golf"];
const listVolksWaguen = ["Clio","Kwid","Fluence"];
const listMarcas = ["Chevrolette","VolksWaguen","Renault"]
const listSeguros = [" seguro contra terceros"," seguro contra terceros completo"," contra todo riesgo"]


addModelsToObject(listChevrolette,chevrolette);
addModelsToObject(listRenault,renault);
addModelsToObject(listVolksWaguen,volksWaguen);


listSeguros.forEach(element => {
    
})

console.log(chevrolette);
console.log(renault);
console.log(volksWaguen);




// export {listMarcas,listChevrolette,listRenault,listVolksWaguen,listSeguros}