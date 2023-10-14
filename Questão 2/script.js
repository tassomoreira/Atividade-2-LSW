const inputTarefa = document.querySelector("#inputTarefa");
const listaTarefas = document.querySelector("ul")
let arrayTarefas = [];

function adicionarTarefa() {
    arrayTarefas.push(inputTarefa.value);
    atualizarLista();
    inputTarefa.value = "";
}

function removerTarefa(index) {
    arrayTarefas.splice(index, 1);
    atualizarLista();
}

function atualizarLista() {
    listaTarefas.innerHTML = "";
    for(let i = 0; i < arrayTarefas.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = arrayTarefas[i];
        listaTarefas.appendChild(listItem);

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        listItem.appendChild(botaoRemover);

        botaoRemover.addEventListener("click", () => {
            removerTarefa(i);
        });
    }
}


inputTarefa.addEventListener("keydown", (event) => {
    if(event.key == 'Enter') {
        adicionarTarefa();
    }
});