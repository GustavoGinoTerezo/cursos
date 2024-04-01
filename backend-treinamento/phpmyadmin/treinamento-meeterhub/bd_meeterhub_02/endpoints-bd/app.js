const express = require('express');
const bodyParser = require('body-parser');
const DepositoController = require('./controllers/deposito_controller');
const EditoraController = require('./controllers/editora_controller');
const AutorController = require('./controllers/autor_controller');
const LivroController = require('./controllers/livro_controller');
const AutoresController = require('./controllers/autores_controller');
const ClienteController = require('./controllers/cliente_controller');
const CarrinhoComprasController = require('./controllers/carrinho_compras_controller');
const ItensCarrinhoController = require('./controllers/itens_carrinho_controller');

const app = express();
const porta = 3000;

app.use(bodyParser.json());

// Rotas para Depósito
app.post('/deposito', DepositoController.criarDeposito);
app.get('/deposito', DepositoController.obterTodosDepositos);
app.get('/deposito/:id', DepositoController.obterDepositoPorId);
app.put('/deposito/:id', DepositoController.atualizarDeposito);
app.delete('/deposito/:id', DepositoController.excluirDeposito);

// Rotas para Editora
app.post('/editora', EditoraController.criarEditora);
app.get('/editora', EditoraController.obterTodasEditoras);
app.get('/editora/:id', EditoraController.obterEditoraPorId);
app.put('/editora/:id', EditoraController.atualizarEditora);
app.delete('/editora/:id', EditoraController.excluirEditora);

// Rotas para Autor
app.post('/autor', AutorController.criarAutor);
app.get('/autor', AutorController.obterTodosAutores);
app.get('/autor/:id', AutorController.obterAutorPorId);
app.put('/autor/:id', AutorController.atualizarAutor);
app.delete('/autor/:id', AutorController.excluirAutor);

// Rotas para Livro
app.post('/livro', LivroController.criarLivro);
app.get('/livro', LivroController.obterTodosLivros);
app.get('/livro/:id', LivroController.obterLivroPorId);
app.put('/livro/:id', LivroController.atualizarLivro);
app.delete('/livro/:id', LivroController.excluirLivro);

// Rotas para Autores
app.post('/autores', AutoresController.criarAutores);
app.get('/autores', AutoresController.obterTodosAutores);
app.get('/autores/:id', AutoresController.obterAutoresPorId);
app.put('/autores/:id', AutoresController.atualizarAutores);
app.delete('/autores/:id', AutoresController.excluirAutores);

// Rotas para Cliente
app.post('/cliente', ClienteController.criarCliente);
app.get('/cliente', ClienteController.obterTodosClientes);
app.get('/cliente/:id', ClienteController.obterClientePorId);
app.put('/cliente/:id', ClienteController.atualizarCliente);
app.delete('/cliente/:id', ClienteController.excluirCliente);

// Rotas para Carrinho de Compras
app.post('/carrinho_compras', CarrinhoComprasController.criarCarrinhoCompras);
app.get('/carrinho_compras', CarrinhoComprasController.obterTodosCarrinhosCompras);
app.get('/carrinho_compras/:id', CarrinhoComprasController.obterCarrinhoComprasPorId);
app.put('/carrinho_compras/:id', CarrinhoComprasController.atualizarCarrinhoCompras);
app.delete('/carrinho_compras/:id', CarrinhoComprasController.excluirCarrinhoCompras);

// Rotas para Itens de Carrinho
app.post('/itens_carrinho', ItensCarrinhoController.criarItemCarrinho);
app.get('/itens_carrinho', ItensCarrinhoController.obterTodosItensCarrinho);
app.get('/itens_carrinho/:id', ItensCarrinhoController.obterItemCarrinhoPorId);
app.put('/itens_carrinho/:id', ItensCarrinhoController.atualizarItemCarrinho);
app.delete('/itens_carrinho/:id', ItensCarrinhoController.excluirItemCarrinho);

app.listen(porta, () => {
    console.log(`Servidor no ar na porta ${porta}`);
});
