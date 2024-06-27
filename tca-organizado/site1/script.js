
 // lista de produtos
 var produtos = [];

 // Função para adicionar produtos à lista
 function adicionarProduto(nome, preco, imagem, imagemOver) {
     produtos.push({ name: nome, price: preco, image: imagem, imagemOver : imagemOver });
 }
 
 // Adicionar produtos à lista
 adicionarProduto("Pacote de Balas - Pacote 500g", 4.99, "images/Pacote de Balas.webp", "images/bala-unidade2.webp");
 
 adicionarProduto("Pacote de Chicletes - 300g", 4.50, "images/Pacote de Chicletes1.webp", "images/chiclete2.webp");
 
 adicionarProduto("Pacote de Pirulitos - 14g", 15.00, "images/pirulito.jpeg", "images/pirulito2.png");              
 
 adicionarProduto("Bala de gelatina Fini- Pacote 100g", 5.00, "images/bala de gelatina.png", "images/gelatina2.jpg");
 
 adicionarProduto("Caixa de Alfajor - 330g", 30.00, "images/Alfajor.webp", "images/alfajor2.webp");
 
 adicionarProduto("Brigadeiro - Pote 350g", 11.90, "images/Brigadeiro.png", "images/brigadeiro2.webp");
 
 adicionarProduto("Paçoca - pote com 40 unidades- 560G", 20.90, "images/pote pacoca.webp", "images/pacoca2.jpg");
 
 adicionarProduto("Doce Suspiro com 50 unidades", 25.50, "images/suspiro.webp", "images/suspiro2.webp");
 
 adicionarProduto("Beijinho Pronto Para Enrolar-350g", 15.99, "images/beijinhp-1tmfwu1j7l.webp", "images/beijinho2.jpg");
 
 adicionarProduto("Bombom Pacote com 50 unidades- Bon o Bon", 36.00, "images/bombom.webp", "images/bombom2.jpg");
 
 adicionarProduto("Confetes de chocolate Pacote 1kg Arcor", 28.00, "images/confete.webp", "images/confetes2.webp", "images/confetes2.webp");
 
 adicionarProduto("Marshmallows- 250g", 9.99, "images/Marshmallows .jpg", "images/marshmallow2.webp");
 
 adicionarProduto("Maria Mole com 50 unidades", 21.50, "images/mariamole.webp", "images/mariamole2.jpg");
 
 adicionarProduto("Cookies 60g- com 52 Unidades", 41.60, "images/cookies.webp", "images/cookies2.png");
 
 adicionarProduto("Pé de moleque -100g", 3.40, "images/pedemoleque.jpg", "images/pedemoleque2.jpg");
 
 adicionarProduto("Pé de moça- 130g", 3.50, "images/pedemoca.webp", "images/pedemoca2.webp");
 
 adicionarProduto("Amendoim açucarado- 350g", 10.00, "images/amendoim.webp", "images/amendoim2.webp");
 
 adicionarProduto("Pipoca doce-100g", 4.50, "images/pipoca.jpg", "images/pipoca2.webp");
 
 adicionarProduto("Doce de leite em pedaços - 350g", 3.99, "images/docedeleite.png", "images/docedeleite2.jpg");
 
 adicionarProduto("Ovo de páscoa - 200g Ao Leite", 20.99, "images/ovodepascoa.webp", "images/ovodepascoa2.jpeg");    // Adicione mais produtos conforme necessário
 
      // exibi os produtos na página
 function exibirProdutos() { 
     var produtosDiv = document.getElementById('list-items-one');
 
     // limpa o conteúdo atual da div de produtos
     produtosDiv.innerHTML = '';
 
     // itera sobre os produtos e cria elementos para cada um
     produtos.forEach(function(product) {
         // Cria um elemento div para representar o produto
         var divProduto = document.createElement('div');
         divProduto.classList.add('item'); // Adiciona a classe 'item' ao elemento
      
 
         // adiciona uma imagem do produto, se disponível
         if (product.image) {
             var imagemProduto = document.createElement('img');
             imagemProduto.src = product.image;
             imagemProduto.alt = product.name;
         
                  imagemProduto.classList.add('product-image'); // Adiciona a classe 'product-image' ao elemento
             divProduto.appendChild(imagemProduto);
 
               // adiciona evento de troca de imagem ao passar o mouse sobre a imagem
               imagemProduto.addEventListener("mouseover", function() {
                 imagemProduto.src = product.imagemOver;
             });
 
             // restaura a imagem original ao tirar o mouse de cima da imagem
             imagemProduto.addEventListener("mouseout", function() {
                 imagemProduto.src = product.image;
             });
 
             // adiciona a imagem do produto ao elemento da div do produto
             divProduto.appendChild(imagemProduto);
         }
               // adiciona o nome do produto como texto dentro da div
            var nomeProduto = document.createElement('p');
            nomeProduto.textContent = product.name;
            divProduto.appendChild(nomeProduto);
    
            // adiciona o preço do produto como texto dentro da div
            var precoProduto = document.createElement('p');
            precoProduto.textContent = 'R$' + product.price.toFixed(2);
            divProduto.appendChild(precoProduto);
 
         // adiciona o lore do produto
         var loreProduto = document.createElement('div');
         loreProduto.classList.add('item-lore');
         loreProduto.textContent = ""; // Altere para o lore real do produto
         divProduto.appendChild(loreProduto);
 
 
         // adiciona o elemento da div do produto à div de produtos
         produtosDiv.appendChild(divProduto);
 
          // adiciona o botão "carrinho"
          var botaoAdicionar = document.createElement('button');
          botaoAdicionar.textContent = 'Adicionar ao Carrinho';
          botaoAdicionar.classList.add('add-to-cart-button'); // adiciona a classe 'add-to-cart-button' ao elemento
          // adiciona um evento de clique ao botão para chamar a função adicionarProdutoAoCarrinho()
          botaoAdicionar.addEventListener('click', function() {
              adicionarProdutoAoCarrinho(product.name, product.price, botaoAdicionar);
          });
          divProduto.appendChild(botaoAdicionar);
  
          // adiciona o elemento div representando o produto à div de produtos
          produtosDiv.appendChild(divProduto);
     });
 }
 // chama a função para exibir os produtos ao carregar a página
 window.onload = function() {
     exibirProdutos();
 };
 

 // inicializa uma variável 'carrinho' como uma matriz vazia para armazenar os itens do carrinho.
 let carrinho = [];
 let total = 0;
 
 function adicionarProdutoAoCarrinho(nome, preco, button) {
     // verifica se o produto já está no carrinho
     const produtoExistente = carrinho.find(produto => produto.nome === nome);
 
     if (produtoExistente) {
         // incrementa a quantidade do produto existente
         produtoExistente.quantidade += 1;
     } else {
         // adiciona um novo objeto representando o produto ao carrinho.
         carrinho.push({ nome, preco, quantidade: 1 });
     }
 
     // adiciona o preço do produto ao total.
     total += preco;
 
     // atualiza a exibição do carrinho na página.
     atualizarCarrinho();
 
     console.log('Produto adicionado ao carrinho:', nome);
     console.log('Novo total:', total); 
     console.log('Quantidade de itens no carrinho:', carrinho.length);
     
     // altera o texto do botão para indicar que o produto foi adicionado ao carrinho.
     button.textContent = 'Adicionado';
     // desabilita o botão para evitar cliques adicionais.
     button.disabled = true;
 
      // programa a redefinição do botão após 0.3 segundos (300 milissegundos)
     setTimeout(function() {
         button.textContent = 'Adicionar ao carrinho';
         button.disabled = false;
     }, 300); // 300 milissegundos = 0.3 segundos
 }
 
 // função para remover um produto do carrinho.
 function removerProduto(index) {
     // subtrai o preço do produto removido do total.
     total -= carrinho[index].preco * carrinho[index].quantidade;
     
     console.log('Produto removido do carrinho:', carrinho[index].nome);
 
     // remove o produto do carrinho pela posição no array.
     carrinho.splice(index, 1);
 
     // atualiza a exibição do carrinho na página.
     atualizarCarrinho();
 
     console.log('Novo total:', total);
     console.log('Quantidade de itens no carrinho:', carrinho.length);
 }
 
 function atualizarCarrinho() {
     const cartItems = document.getElementById('cart-items');
     cartItems.innerHTML = '';
     carrinho.forEach((item, index) => {
         const li = document.createElement('li');
         li.textContent = `${item.nome} - $${item.preco} x ${item.quantidade}`;
         li.classList.add('cart-item'); // Adiciona a classe 'cart-item' ao elemento <li>
         
         // botão para remover o produto do carrinho
         const button = document.createElement('button');
         button.innerHTML = '<i class="fas fa-times"></i>'; // Ícone de "X" usando Font Awesome
         
         button.addEventListener('click', () => {
             removerProduto(index);
         });
         
         li.appendChild(button);
         cartItems.appendChild(li);
     });
     
     document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
     document.getElementById('cart-item-count').textContent = carrinho.length;
 }
 
 
 // função para trocar a imagem quando o mouse passar por cima
 function trocarImagem(elemento, novaImagem) {
     document.getElementById(elemento).src = novaImagem;  
 }
 // função para restaurar a imagem original quando o mouse sai de cima dela
 function restaurarImagem(elemento, imagemOriginal) {
     document.getElementById(elemento).src = imagemOriginal;
 }
 
 // seleciona o elemento do carrinho
 const cartContainer = document.getElementById('cart');
 
 // adiciona um ouvinte de evento para o evento de rolagem
 window.addEventListener('scroll', function() {
     // obtém a posição atual da janela de visualização em relação ao documento
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     
     // obtém a altura do cabeçalho
     const headerHeight = document.querySelector('header').offsetHeight;
 
     // verifica se a posição de rolagem está dentro do limite permitido
     const maxScroll = window.innerHeight - cartContainer.clientHeight - 20; // 20 pixels de margem
     const scrollPosition = Math.min(scrollTop, maxScroll);
 
     // verifica se a posição de rolagem é maior que a altura do cabeçalho
     const finalTopPosition = Math.max(scrollPosition, headerHeight);
 
     // Define a posição superior do carrinho com base na posição de rolagem limitada
     cartContainer.style.top = `${finalTopPosition}px`;
 });
 
 
 
 // função para tornar o carrinho fixo no topo da página
 function tornarCarrinhoFixoNoTopo() {
    const cart = document.getElementById('cart');
    const ocutarbutton = document.getElementById('hide-cart-button');

    // adiciona a classe 'fixed-cart-container' ao carrinho para torná-lo fixo no topo
    cart.classList.toggle('fixed-cart-container');

    // verifica se a classe 'fixed-cart-container' está presente no carrinho
    const DeixarFixo = cart.classList.contains('fixed-cart-container');

    if (DeixarFixo) {
        // define o carrinho como fixo no topo
        cart.style.position = 'fixed';
        cart.style.top = '200px';
        cart.style.right = '20px'; // Aqui você pode ajustar conforme necessário
        cart.style.marginTop = '0'; // remove o marginTop quando o carrinho for fixado
        ocutarbutton.textContent = 'Ocultar carrinho'; // Altera o texto do botão
    } else {
        // remove a posição fixa do carrinho
        cart.style.position = 'static';
        cart.style.marginTop = '150px'; // Adiciona margem superior
        ocutarbutton.textContent = 'Mostrar carrinho'; // Restaura o texto do botão
    }
}

 // adiciona um ouvinte de evento ao botão "Ocultar/Mostrar carrinho"
 document.getElementById('hide-cart-button').addEventListener('click', tornarCarrinhoFixoNoTopo);
 
 // chama a função para tornar o carrinho fixo no topo ao carregar a página
 tornarCarrinhoFixoNoTopo();
 
 // função para verificar a posição do carrinho e mostrar o botão "Mostrar carrinho" quando estiver no topo
 function verificarPosicaoCarrinho() {
     const cart = document.getElementById('cart');
     const ocutarbutton = document.getElementById('hide-cart-button');
     const cartTop = cart.getBoundingClientRect().top;
 
 }
 
 // adiciona um ouvinte de evento para o evento de rolagem para verificar a posição do carrinho
 window.addEventListener('scroll', verificarPosicaoCarrinho);
 
 // chama a função para verificar a posição do carrinho ao carregar a página
 verificarPosicaoCarrinho();
 
 
 // ouvinte de evento para o envio do formulário de pagamento
 document.getElementById("paymentForm").addEventListener("submit", function(event) {
     event.preventDefault(); // Evita o comportamento padrão de envio do formulário
     
     // verifica se o carrinho de compras está vazio
     var carrinhoDeComprasVazio = (carrinho.length === 0);
     
     if (carrinhoDeComprasVazio) {
         alert("Seu carrinho de compras está vazio. Adicione itens antes de finalizar a compra.");
     } else {
         var selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
         
         // verifica se algum método de pagamento foi selecionado
         if (!selectedPaymentMethod) {
             alert("Por favor, selecione um método de pagamento.");
         } else {
             // Aqui você pode adicionar a lógica para cada método de pagamento
             switch (selectedPaymentMethod.value) {
                 case "pix":
                     alert("Seu pagamento com PIX será processado!");
                     break;
                 case "debit":
                     alert("Seu pagamento com cartão de débito será processado!");
                     break;
                 case "credit":
                     alert("Seu pagamento com cartão de crédito será processado!");
                     break;
                 case "boleto":
                     alert("Seu boleto será gerado!");
                     break;
                 default:
                     alert("Por favor, selecione um método de pagamento.");
                     break;
             }
         }
     }
 });
 
         // função para verificar se o carrinho está vazio
 function verificarCarrinhoVazio() {
     // Verifica se o carrinho de compras está vazio
     var carrinhoDeComprasVazio = (document.getElementById("cart-items").children.length === 0);
     
     // se o carrinho estiver vazio, exibe um alerta e retorna false
     if (carrinhoDeComprasVazio) {
         alert("Seu carrinho de compras está vazio. Adicione itens antes de finalizar a compra.");
         return false; // impede o envio do formulário
     }
     return true; // permite o envio do formulário se o carrinho não estiver vazio
 }
 
 // bloco filtro
 
 document.getElementById("searchForm").addEventListener("submit", function(event) {
     event.preventDefault(); // evita que o formulário seja enviado
 
     // captura o termo de pesquisa digitado pelo usuário
     var searchTerm = document.getElementById("searchInput").value.toLowerCase();
 
     // seleciona todos os itens de produto
     var produtos = document.querySelectorAll(".item");
 
     // itera sobre cada item de produto
     produtos.forEach(function(product) {
         // captura o texto do produto
         var productText = product.innerText.toLowerCase();
         
         // verifica se o termo de pesquisa está contido no texto do produto
         if (productText.includes(searchTerm)) {
             // se o termo de pesquisa corresponder ao produto, mostra o produto
             product.style.display = "flex";
         } else {
             // se o termo de pesquisa não corresponder ao produto, oculta o produto
             product.style.display = "none";
         }
     });
 });
 
 //  botão "Limpar" pelo ID
const clearButton = document.getElementById('clearButton');

// adiciona um ouvinte de evento para o evento de clique no botão "Limpar"
clearButton.addEventListener('click', function() {
    // define o valor do campo de pesquisa como uma string vazia
    document.getElementById('searchInput').value = '';

    // mostra todos os produtos novamente
    var produtos = document.querySelectorAll('.item');
    produtos.forEach(function(product) {
        product.style.display = 'flex';
    });
});

 /* document.getElementById('item').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const item = document.getElementById('item').value;
    if (item) {
        addProductToCart(productName);
        document.getElementById('item').value = '';
    }
});

function addProductToCart(productName) {
    const cartItems = document.getElementById('cartItems');
    
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.textContent = productName;
    
    cartItems.appendChild(cartItem);
} */ 
 
   
 