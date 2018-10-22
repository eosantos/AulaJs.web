var tabela = document.querySelector("#tabela-pacientes");

//Removendo um paciente
tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fedeOut"); //Efeito de transição

    setTimeout(function(){
        event.target.parentNode.remove(); //remove
    },500);
   
});