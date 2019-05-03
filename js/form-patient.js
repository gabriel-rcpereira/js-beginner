document.querySelector("#adicionar-paciente")
    .addEventListener("click", function(event){
        event.preventDefault();

        var formAdiciona = document.querySelector("#form-adiciona");
        var patient = getPatient(formAdiciona);

        if(isWeightValid(patient.peso)){
            alert("Peso inválido !");
            return;
        }

        if(isStatureValid(patient.altura)){
            alert("Altura inválida !");
            return;
        }
        
        var tabelaPacientes = document.querySelector("#tabela-pacientes");
        tabelaPacientes.appendChild(createElementTr(patient));

        formAdiciona.reset();
});

function createElementTr(patient) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(createElementTd(patient.nome, "info-nome"));
    pacienteTr.appendChild(createElementTd(patient.peso, "info-peso"));
    pacienteTr.appendChild(createElementTd(patient.altura, "info-altura"));
    pacienteTr.appendChild(createElementTd(patient.gordura, "info-gordura"));
    pacienteTr.appendChild(createElementTd(estimateImc(patient.peso, patient.altura), "info-imc"));

    return pacienteTr;
}

function createElementTd(valueElement, classElement){
    var elementTd = document.createElement("td");
    elementTd.textContent = valueElement;
    elementTd.classList.add(classElement);

    return elementTd;
}

function getPatient(form){
    var patient = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    };

    return patient;
}

function isStatureValid(altura) {
    return altura <= 0 || altura >= 3;
}

function isWeightValid(peso) {
    return peso <= 0 || peso > 1000;
}