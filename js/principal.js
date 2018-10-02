var titulo = document.querySelector(".titulo"); // Selecionando Título por class
titulo.textContent = "Nitrução Zica"; // Imprimindo novo nome do Título

var Ntabela = document.querySelector(".nome-tabela"); // Selecionando H2 nome tabela por class
Ntabela.textContent = "Tabela de Pacientes"; // Imprimindo novo nome da tabela

//var paciente = document.querySelector("#primeiro-paciente")  // Selecionando primeiro paciente

    var pacientes = document.querySelectorAll(".paciente") // Selecionando todos pacientes

for (var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];
    
    var tdpeso = paciente.querySelector(".info-peso"); //Selecionando Peso
    peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura"); //Selecionando Altura
    altura = tdaltura.textContent;


    var tdimc = paciente.querySelector(".info-imc"); //Selecionando imc

    var pesoEhvalido = true; //Validando Peso
    var alturaEhvalido = true; //Validando Altura

    if (peso <= 0 || peso > 300) { // Se peso for menor que 0 ou Maior que 300 = ERRO | VALIDAÇÃO
        console.log("Peso Inválido!")
        pesoEhvalido = false;
        tdimc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) { // Se altura for menor que 0 ou Maior que 3 = ERRO | VALIDAÇÃO
        console.log("Altura Inválido!")
        alturaEhvalido = false;
        tdimc.textContent = "Altura Inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (alturaEhvalido && pesoEhvalido) { // Se peso e altura forem válidos, calcula IMC | VALIDAÇÃO
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    }

}