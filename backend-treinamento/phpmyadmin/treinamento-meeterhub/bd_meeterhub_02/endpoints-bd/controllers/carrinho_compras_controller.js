const CarrinhoComprasModel = require('../models/carrinho_compras_model.js');

class CarrinhoComprasController {
    async criarCarrinhoCompras(req, res) {
        const carrinhoCompras = req.body;
        try {
            const idCarrinho = await CarrinhoComprasModel.criarCarrinhoCompras(carrinhoCompras);
            res.status(201).json({ id_carrinho: idCarrinho });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um carrinho de compras" });
        }
    }

    async obterTodosCarrinhosCompras(req, res) {
        try {
            const carrinhosCompras = await CarrinhoComprasModel.obterTodosCarrinhosCompras();
            res.status(200).json(carrinhosCompras);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos os carrinhos de compras' });
        }
    }

    async obterCarrinhoComprasPorId(req, res) {
        const id = req.params.id;
        try {
            const carrinhoCompras = await CarrinhoComprasModel.obterCarrinhoComprasPorId(id);
            if (carrinhoCompras) {
                res.status(200).json(carrinhoCompras);
            } else {
                res.status(404).json({ erro: 'Carrinho de compras não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar o carrinho de compras' });
        }
    }

    async atualizarCarrinhoCompras(req, res) {
        const id = req.params.id;
        const carrinhoCompras = req.body;
        try {
            const resultado = await CarrinhoComprasModel.atualizarCarrinhoCompras(id, carrinhoCompras);
            if (resultado) {
                res.status(200).json({ msg: 'Carrinho de compras atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Carrinho de compras não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar carrinho de compras' });
        }
    }

    async excluirCarrinhoCompras(req, res) {
        const id = req.params.id;
        try {
            const resultado = await CarrinhoComprasModel.excluirCarrinhoCompras(id);
            if (resultado) {
                res.status(200).json({ msg: 'Carrinho de compras excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Carrinho de compras não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir carrinho de compras' });
        }
    }
}

module.exports = new CarrinhoComprasController();
