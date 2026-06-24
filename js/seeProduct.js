const produtos = [
    {
        id: 1,
        name: "RX 580 8GB SOYO",
        description: "Placa de vídeo para jogos em Full HD.",
        price: 599.90,
        images: [
            "../imgs/RX5801.png",
            "../imgs/RX5802.png",
            "../imgs/RX5803.png",
            "../imgs/RX5804.png"
        ]
    },
    {
        id: 2,
        name: "Cadeira Gamer Batman TX3",
        description: "Conforto para longas sessões de jogo.",
        price: 1299.90,
        images: [
            "../imgs/cadeiragames.png",
            "../imgs/cadeiragames2.png",
            "../imgs/cadeiragames3.png",
            "../imgs/cadeiragames4.png"
        ]
    },
    {
        id: 3,
        name: "Hearts of Iron IV",
        description: "Jogo de estratégia da Segunda Guerra Mundial.",
        price: 79.90,
        images: [
            "../imgs/hoi41.png",
            "../imgs/hoi42.png",
            "../imgs/hoi43.png",
            "../imgs/hoi44.png"
        ]
    },
    {
        id: 4,
        name: "Battlefield 6",
        description: "FPS de guerra com batalhas em larga escala.",
        price: 249.90,
        images: [
            "../imgs/bf61.png",
            "../imgs/bf62.png",
            "../imgs/bf63.png",
            "../imgs/bf64.png"
        ]
    }
];

const id = Number(localStorage.getItem("produtoSelecionado"));

const produto = produtos.find(p => p.id === id);

document.getElementById("mainImage").src = produto.images[0];
document.getElementById("name").textContent = produto.name;
document.getElementById("descricption").textContent = produto.description;
document.getElementById("price").textContent =
    `R$ ${produto.price.toFixed(2)}`;

let currentImage = 0;

const mainImage = document.getElementById("mainImage");

mainImage.src = produto.images[currentImage];

document.getElementById("nextBtn").addEventListener("click", () => {
    currentImage = (currentImage + 1) % produto.images.length;
    mainImage.src = produto.images[currentImage];
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentImage--;

    if (currentImage < 0) {
        currentImage = produto.images.length - 1;
    }

    mainImage.src = produto.images[currentImage];
});

document.getElementById("AddToCart").addEventListener("click", () => {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    const itemExistente =
        carrinho.find(item => item.id === produto.id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    window.location.href = "finishPurchase.html";
});