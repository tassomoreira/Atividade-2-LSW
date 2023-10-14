const inputNome = document.querySelector("#inputNome");
const inputSalario = document.querySelector("#inputSalario");
const botaoAdicionar = document.querySelector("#botaoAdicionar");
const ordList = document.querySelector("#ordList");

let arrayObjetos = [];

function criarObjeto(nomeInput, salarioInput) {
    const valorNome = nomeInput.value;
    const valorSalario = parseFloat(salarioInput.value); // Converter para número
    const objeto = {
        nome: valorNome,
        salario: valorSalario,
    };
    inputNome.value = "";
    inputSalario.value = "";
    return objeto;
}

function mostrarLista() {
    ordList.innerHTML = "";

    for (let i = 0; i < arrayObjetos.length; i++) {
        let valorNome = document.createElement("li");
        valorNome.textContent = `Nome: ${arrayObjetos[i].nome}`;
        ordList.appendChild(valorNome);

        let unrdList2 = document.createElement("ul");
        valorNome.appendChild(unrdList2);

        let valorSalario = document.createElement("li");
        valorSalario.textContent = `Salário: ${arrayObjetos[i].salario}`;
        unrdList2.appendChild(valorSalario);
    }

    const totalSalarios = arrayObjetos.reduce((total, objeto) => total + objeto.salario, 0);
    const maiorSalario = arrayObjetos.reduce((max, objeto) => (objeto.salario > max ? objeto.salario : max), 0);

    const totalSalariosElement = document.createElement("p");
    totalSalariosElement.textContent = `Total de Salários: ${totalSalarios.toFixed(2)}`;
    ordList.appendChild(totalSalariosElement);

    const maiorSalarioElement = document.createElement("p");
    maiorSalarioElement.textContent = `Maior Salário: ${maiorSalario.toFixed(2)}`;
    ordList.appendChild(maiorSalarioElement);
}

botaoAdicionar.addEventListener("click", () => {
    arrayObjetos.push(criarObjeto(inputNome, inputSalario));
    mostrarLista();
});
