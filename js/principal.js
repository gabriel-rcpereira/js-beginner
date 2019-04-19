var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(setImc);

function setImc(paciente){
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if(peso <= 0 || peso > 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
    }
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
        
    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
    }
    
    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc.toFixed(2);
    } else {
        paciente.classList.add("dados-invalidos");
    }
}

var adicionarPaciente = document.querySelector("#adicionar-paciente");
adicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();

    var formAdiciona = document.querySelector("#form-adiciona");

    var nome = formAdiciona.nome.value;
    var peso = formAdiciona.peso.value;
    var altura = formAdiciona.altura.value;
    var gordura = formAdiciona.gordura.value;

    var tabelaPacientes = document.querySelector("#tabela-pacientes");

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(createElementTd(nome, "info-nome"));
    pacienteTr.appendChild(createElementTd(peso, "info-peso"));
    pacienteTr.appendChild(createElementTd(altura, "info-altura"));
    pacienteTr.appendChild(createElementTd(gordura, "info-gordura"));
    pacienteTr.appendChild(createElementTd("", "info-imc"));

    tabelaPacientes.appendChild(pacienteTr);
});

function createElementTd(valueElement, classElement){
    var elementTd = document.createElement("td");
    elementTd.textContent = valueElement;
    elementTd.classList.add(classElement);

    return elementTd;
}