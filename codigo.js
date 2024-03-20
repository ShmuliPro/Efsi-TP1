const inputMatematica = document.getElementById("MatematicaNota");

const inputLengua = document.getElementById("LenguaNota");

const inputEfsi = document.getElementById("EfsiNota");

const botonPromedio = document.getElementById("PromedioBoton");

const botonMayorNota = document.getElementById("MayorNota");

let resultado = document.getElementById("RESULT");

let imagen = document.getElementById("imagen");

function ValidacionN(inputElement) {
    inputElement.onkeyup = () => {
        if (inputElement.value > 10 || inputElement.value < 1) {
            
            inputElement.style.color = "red";

            inputElement.style.border = "5px solid red";
        } else {inputElement.style.color = "green";
            inputElement.style.border = "5px solid green";}
    };
}
ValidacionN(inputMatematica);

ValidacionN(inputLengua);

ValidacionN(inputEfsi);

botonPromedio.onclick = (e) =>{
    let MatematicaValue = parseFloat(inputMatematica.value);

    let LenguaValue = parseFloat(inputLengua.value);

    let EfsiValue = parseFloat(inputEfsi.value);

    if(isNaN(MatematicaValue) || isNaN(LenguaValue) || isNaN(EfsiValue)){
        imagen.src = "imagenes/mascara.gif";
        alert("INGRESE NUMERO");
    }
    else if(MatematicaValue < 10 && MatematicaValue >1 && LenguaValue <10 && LenguaValue > 1 && EfsiValue<10 && EfsiValue > 1){
        let PROMEDIO = 0;
        let SUMATORIA = MatematicaValue + LenguaValue + EfsiValue;
        PROMEDIO = SUMATORIA / 3;
        
        if(PROMEDIO >= 6){
            resultado.style.color = "green";
            imagen.src = "imagenes/pout-christian-bale.gif";}
        
            else{
            resultado.style.color = "red";
            imagen.src = "imagenes/NigayO.gif";}


        resultado.innerHTML = "El promedio es: " + PROMEDIO;
    }
    else{
        imagen.src = "imagenes/mascara.gif";
        resultado.style.color = "orange";
        resultado.innerHTML = "ERROR VALIDA QUE ESTEN TUS NOTAS BIEN PUESTAS"
        }
}
botonMayorNota.onclick = () => {

    let MatematicaValue = parseFloat(inputMatematica.value);

    let LenguaValue = parseFloat(inputLengua.value);

    let EfsiValue = parseFloat(inputEfsi.value);

    let NotaMayor = 0;
    
    let MateriaMejor = " ";

    if(isNaN(MatematicaValue) || isNaN(LenguaValue) || isNaN(EfsiValue)){
        imagen.src = "imagenes/mascara.gif";
        alert("INGRESAR NOTAS PORFAVOR");
    }
    else if(MatematicaValue < 10 && MatematicaValue >1 && LenguaValue <10 && LenguaValue > 1 && EfsiValue<10 && EfsiValue > 1){
    let materias = {Matematica: MatematicaValue, Lengua:LenguaValue,EFSI: EfsiValue}

   

    for (let materia in materias) {
        if (materias[materia] > NotaMayor) {
            NotaMayor=materias[materia]
            MateriaMejor = materia;
           
        }
        else if(materias[materia] == NotaMayor)
        {
            MateriaMejor = MateriaMejor + " y "+ materia;
        }
    }
    resultado.style.color = "blue";

    resultado.innerHTML = MateriaMejor + " y tu nota : " + NotaMayor;

    if(NotaMayor>=6){imagen.src = "imagenes/pout-christian-bale.gif";}else{imagen.src = "imagenes/NigayO.gif";}
}
    else{

        resultado.innerHTML = "VALIDA QUE TUS NOTAS ESTEN BIEN PUESTAS"; 

        imagen.src = "imagenes/mascara.gif";
        
    }
}