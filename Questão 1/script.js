const num = document.querySelector("#num");
const separador = document.querySelector("#separador")
const botao = document.querySelector("button");
const spanMin = document.querySelector("#spanMin");
const spanMax = document.querySelector("#spanMax");

botao.addEventListener("click", () => {
    let valorEntrada = num.value;
    let arrayNumeros = valorEntrada.split(separador.value);
    let min = Math.min(...arrayNumeros);
    let max = Math.max(...arrayNumeros);
    spanMin.textContent = `O menor número da lista é ${min}`;
    spanMax.textContent = `O maior número da lista é ${max}`;
});