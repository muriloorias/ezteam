const produtos = [
    {
        id: 1,
        name: "RX 580 8GB SOYO",
        description: "Placa de vídeo para jogos em Full HD.",
        price: 599.90,
        image: "../imgs/rx5801.png"
    },
    {
        id: 2,
        name: "Cadeira Gamer Batman TX3",
        description: "Conforto para longas sessões de jogo.",
        price: 1299.90,
        image: "../imgs/cadeiragames.png"
    },
    {
        id: 3,
        name: "Hearts of Iron IV",
        description: "Jogo de estratégia da Segunda Guerra Mundial.",
        price: 79.90,
        image: "../imgs/hoi41.png"
    },
    {
        id: 4,
        name: "Battlefield 6",
        description: "FPS de guerra com batalhas em larga escala.",
        price: 249.90,
        image: "../imgs/bf61.png"
    }
];

const games = document.getElementById("games");

produtos.forEach(produto => {
    games.innerHTML += `
        <div class="card" onclick="abrirProduto(${produto.id})">
            <img src="${produto.image}" alt="${produto.nome}">
            <h3>${produto.name}</h3>
            <p>${produto.description}</p>
            <span>R$ ${produto.price.toFixed(2)}</span>
            <button>Comprar</button>
        </div>
    `;
});

function abrirProduto(id) {
    localStorage.setItem("produtoSelecionado", id);
    window.location.href = "seeProduct.html";
}

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    toggle.textContent =
        document.body.classList.contains('dark')
            ? '🌙'
            : '☀️';
});

function GoToLogin(){
    window.location.href = "login.html"
}


function GoToFinishPurchase(){
    window.location.href = "finishPurchase.html"
}

