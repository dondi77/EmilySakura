const produtos = [
    { id: 1, nome: "Nendoroid Sakura superfofa de Kimono", preco: 109, imagem: "img/sakura.jpeg"},
    { id: 2, nome: "Sakurinha mini", preco: 999, imagem: "img/sakurinha.jpeg"},
    { id: 10, nome: "Figure Sakura Haruno com Efeitos e Luzes", preco: 109, imagem: "img/linda.jpeg"},
    { id: 3, nome: "Figure Sakura Soco forte", preco: 220, imagem: "img/gata.jpeg"},
    { id: 4, nome: "Sakura e amiguinha Hinata Princesas", preco: 450, imagem: "img/princesa.jpeg"},
    { id: 14, nome: "Sakura Figure Linda usada", preco: 790, imagem: "img/arma.jpeg"},
    { id: 5, nome: "Sakura da Akatsuki", preco: 180, imagem: "img/akastuki.jpeg"},
    { id: 8, nome: "Bonequinha SUperlinda Playmobil", preco: 30, imagem: "img/bonecrinha.jpeg"},
    { id: 6, nome: "Meu gato vestido de Sakura", preco: 9, imagem: "img/gato.jpeg"},
    { id: 7, nome: "Sakura Silly", preco: 499, imagem: "img/sili.jpeg"},
    { id: 9, nome: "Lego Legal da Sakura", preco: 8, imagem: "img/lego.jpeg"},
    { id: 11, nome: "Sakura Xuburinha", preco: 2, imagem: "img/heh.jpeg"},
    { id: 12, nome: "Boneca xobura Sakura", preco: 35, imagem: "img/xobura.jpeg"},
    { id: 13, nome: "Boneca da Sakura Cabecuda", preco: 89, imagem: "img/cabecuda.jpeg"},
    { id: 15, nome: "Conjunto almofadas Sakuras", preco: 90, imagem: "img/varias.jpeg"},
];

function renderizarProdutos() {
    const container = document.getElementById("lista-produtos");
    produtos.forEach(produto => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
            <div class="card h-100 d-flex flex-column" style="min-height: 420px;">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style="height: 400px; object-fit: cover;">
                <div class="card-body d-flex flex-column flex-grow-1">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">R$ ${produto.preco.toFixed(2)}</p>
                    <div class="mt-auto">
                        <button class="btn btn-rosa w-100" onclick="adicionarCarrinho(${produto.id})">Adicionar ao Carrinho</button>
S</div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

function adicionarCarrinho(id) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Seu consumista!! Que vergonha.\nAdicionado ao carrinho já.");
}

renderizarProdutos();
