var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(setImc);

function setImc(patientTr){
    var tdPeso = patientTr.querySelector(".info-peso");
    var weight = tdPeso.textContent;
       
    var tdAltura = patientTr.querySelector(".info-altura");
    var stature = tdAltura.textContent;
    
    var tdImc = patientTr.querySelector(".info-imc");
    tdImc.textContent = estimateImc(weight, stature);
}

function estimateImc(weight, stature){
    var imc = weight / ( stature * stature);    
    
    return imc.toFixed(2);
}