//camelCase - Carrinho de compras online - ***Erros/OBS SOBRE MEU CÓDIGO

let total = 0;
document.getElementById('lista-produtos').innerHTML = '';                   //limpando exemplos
document.getElementById('valor-total').textContent = 'R$ 0';

//let listaProdutos = []; - não precisa ser literalmente uma lista ***

//function adicionarNoCarrinho() - para usar esse nome precisa mudar no HTML conectado ao botão ***
function adicionar() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];                                //separando as infomações nos values do HTML
    let valores = produto.split('R$')[1];                                   //usando os caracteres como referencia
    //isso faz desnecessário o uso de laços para selecionar os produtos ***
    let subTotal = quantidade * valores;

    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valores}</span>
  </section>`;                                                              //adcionando na lista

    total = total + subTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = 0;

}