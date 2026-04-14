let botao = document.getElementById("botao-add-tarefa");
let input = document.getElementById("input-tarefa");
let lista = document.getElementById("lista");


botao.addEventListener("click", function () { 
    //determinando oq o botao faz quando clicado
     //pega oq eu digitar na caixa 
    let texto = input.value;
    //verifica se o texto esta vazio para nada acontecer
    if(texto === "") return;

    let li = document.createElement("li");
    li.textContent = texto; 

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    //texto do botao

    btnRemover.addEventListener("click", function () {
        li.remove(); 
    });
    //junta o item ao botao de remover
    li.appendChild(btnRemover);
    //coloca o item da lista na variavel da lista
    lista.appendChild(li);
    input.value = "";
    //deixa vazio
});
