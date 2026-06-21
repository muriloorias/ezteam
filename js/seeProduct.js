const produtos = [
    {
        id: 1,
        name: "RX 580 8GB SOYO",
        description: "Placa de vídeo para jogos em Full HD.",
        price: 599.90,
        image: "../imgs/rx580.png"
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
        image: "../imgs/hoi4.png"
    },
    {
        id: 4,
        name: "Battlefield 6",
        description: "FPS de guerra com batalhas em larga escala.",
        price: 249.90,
        image: "../imgs/bf6.png"
    }
];

const id = Number(localStorage.getItem("produtoSelecionado"));

const produto = produtos.find(p => p.id === id);

document.getElementById("image").src = produto.image;
document.getElementById("name").textContent = produto.name;
document.getElementById("descricption").textContent = produto.description;
document.getElementById("price").textContent =
    `R$ ${produto.price.toFixed(2)}`;
