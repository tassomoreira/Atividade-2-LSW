const inputPesquisa = document.querySelector("#inputPesquisa");
const unrdList1 = document.querySelector("#unrdList1");

const filmes = [{
    "titulo": "Dawn of the Planet of the Apes",
    "lancamento": 2014,
},
{
    "titulo": "District 9",
    "lancamento": 2009,
},
{
    "titulo": "Transformers: Age of Extinction",
    "lancamento": 2014,
},
{
    "titulo": "X-Men: Days of Future Past",
    "lancamento": 2014,
},
{
    "titulo": "The Machinist",
    "lancamento": 2004,
},
{
    "titulo": "The Last Samurai",
    "lancamento": 2003,
},
{
    "titulo": "The Amazing Spider-Man 2",
    "lancamento": 2014,
},
{
    "titulo": "Tangled",
    "lancamento": 2010,
},
{
    "titulo": "Rush",
    "lancamento": 2013,
},
{
    "titulo": "Drag Me to Hell",
    "lancamento": 2009,
},
{
    "titulo": "Despicable Me 2",
    "lancamento": 2013,
},
{
    "titulo": "Kill Bill: Vol. 1",
    "lancamento": 2003,
},
{
    "titulo": "A Bug's Life",
    "lancamento": 1998,
},
{
    "titulo": "Life of Brian",
    "lancamento": 1972,
},
{
    "titulo": "How to Train Your Dragon",
    "lancamento": 2010,
}];

function mostrarFilmes(filmes) {
    unrdList1.innerHTML = "";

    for(let i = 0; i < filmes.length; i++) {
        let filmeTitulo = document.createElement("li");
        filmeTitulo.textContent = `Filme: ${filmes[i].titulo}`;
        unrdList1.appendChild(filmeTitulo);

        let unrdList2 = document.createElement("ul");
        filmeTitulo.appendChild(unrdList2); 

        let filmeLancamento = document.createElement("li");
        filmeLancamento.textContent = `Lançamento: ${filmes[i].lancamento}`;
        unrdList2.appendChild(filmeLancamento);
    }
}

mostrarFilmes(filmes);

inputPesquisa.addEventListener("keyup", () => {
    let valorPesquisa = inputPesquisa.value.toLowerCase();
    const listaFilmes = filmes.filter((filme) => filme.titulo.toLowerCase().includes(valorPesquisa));
    mostrarFilmes(listaFilmes)
});
  