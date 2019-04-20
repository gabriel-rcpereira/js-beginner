document.querySelector("#adicionar-paciente")
    .addEventListener("click", function(event){
        event.preventDefault();

        var formAdiciona = document.querySelector("#form-adiciona");

        var nome = formAdiciona.nome.value;
        var peso = formAdiciona.peso.value;

        if(isWeightValid(peso)){
            alert("Peso inválido !");
            return;
        }

        var altura = formAdiciona.altura.value;
        
        if(isStatureValid(altura)){
            alert("Altura inválida !");
            return;
        }

        var gordura = formAdiciona.gordura.value;

        var tabelaPacientes = document.querySelector("#tabela-pacientes");

        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(createElementTd(nome, "info-nome"));
        pacienteTr.appendChild(createElementTd(peso, "info-peso"));
        pacienteTr.appendChild(createElementTd(altura, "info-altura"));
        pacienteTr.appendChild(createElementTd(gordura, "info-gordura"));
        pacienteTr.appendChild(createElementTd(estimateImc(peso, altura), "info-imc"));

        tabelaPacientes.appendChild(pacienteTr);
});

function isStatureValid(altura) {
    return altura <= 0 || altura >= 3;
}

function isWeightValid(peso) {
    return peso <= 0 || peso > 1000;
}

function createElementTd(valueElement, classElement){
    var elementTd = document.createElement("td");
    elementTd.textContent = valueElement;
    elementTd.classList.add(classElement);

    return elementTd;
}