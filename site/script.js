let input = document.getElementById("inputtarefa")
let botao = document.getElementById("botaotarefa")
let lista = document.getElementById("lista")

botao.addEventListener("click", function () {
   let.novoelemento = document.createElement("li")
   novoelemento.textcontent = (input.value)
   lista.appendChild(novoelemento)
});

const btnRemover = document.createElement("button");
btnRemover.textContent = "Concluir tarefa";
novoelemento.appendChild(btnRemover)

btnRemover.addEventListener("click", function () {
    novoelemento.remove()
});
    

