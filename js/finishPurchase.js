const carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

const cartItems =
    document.getElementById("cartItems");

let total = 0;

carrinho.forEach(produto => {

    total += produto.price * produto.quantidade;

    cartItems.innerHTML += `
        <div class="item">
            <img src="${produto.images[0]}" width="120">

            <div>
                <h3>${produto.name}</h3>

                <p>
                    Quantidade: ${produto.quantidade}
                </p>

                <p>
                    R$ ${(produto.price * produto.quantidade)
            .toFixed(2)}
                </p>
            </div>
        </div>
    `;
});

document.getElementById("total").textContent =
    `Total: R$ ${total.toFixed(2)}`;

function gerarChave() {

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let chave = "";

    for (let i = 0; i < 5; i++) {

        if (i > 0)
            chave += "-";

        for (let j = 0; j < 5; j++) {

            chave += chars[
                Math.floor(Math.random() * chars.length)
            ];
        }
    }

    return chave;
}

document.getElementById("buyBtn")
    .addEventListener("click", () => {

        if (carrinho.length === 0) {

            alert("Carrinho vazio!");
            return;
        }

        let mensagem =
            "✅ Compra concluída!\n\n";

        carrinho.forEach(produto => {

            if (
                produto.name.includes("Battlefield") ||
                produto.name.includes("Hearts of Iron")
            ) {

                mensagem +=
                    `${produto.name}\n` +
                    `Chave: ${gerarChave()}\n\n`;
            }
        });

        alert(mensagem);

        localStorage.removeItem("carrinho");

        location.reload();
});

document.getElementById("homeBtn")
    .addEventListener("click", () => {
        window.location.href = "home.html";
});