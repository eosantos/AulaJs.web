var titulo = document.querySelector(".titulo"); // Selecionando Título por class
titulo.textContent = "NUTRIÇÃO ZICA";  // Imprimindo novo nome do Título

var pacientes = document.querySelectorAll(".paciente"); // Selecionando todos pacientes

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); //Selecionando Peso
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura"); //Selecionando Altura
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc"); //Selecionando imc

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    // Se peso for menor que 0 ou Maior que 300 = ERRO | VALIDAÇÃO
    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    // Se altura for menor que 0 ou Maior que 3 = ERRO | VALIDAÇÃO
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    // Se peso e altura forem válidos, calcula IMC | VALIDAÇÃO
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
