const ItensCarrinhoModel = require('../models/itens_carrinho_model.js');

class ItensCarrinhoController {
    async criarItemCarrinho(req, res) {
        const itemCarrinho = req.body;
        try {
            const idItem = await ItensCarrinhoModel.criarItemCarrinho(itemCarrinho);
            res.status(201).json({ id_item: idItem });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um item de carrinho" });
        }
    }

    async obterTodosItensCarrinho(req, res) {
        try {
            const itensCarrinho = await ItensCarrinhoModel.obterTodosItensCarrinho();
            res.status(200).json(itensCarrinho);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos os itens de carrinho' });
        }
    }

    async obterItemCarrinhoPorId(req, res) {
        const id = req.params.id;
        try {
            const itemCarrinho = await ItensCarrinhoModel.obterItemCarrinhoPorId(id);
            if (itemCarrinho) {
                res.status(200).json(itemCarrinho);
            } else {
                res.status(404).json({ erro: 'Item de carrinho não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar o item de carrinho' });
        }
    }

    async atualizarItemCarrinho(req, res) {
        const id = req.params.id;
        const itemCarrinho = req.body;
        try {
            const resultado = await ItensCarrinhoModel.atualizarItemCarrinho(id, itemCarrinho);
            if (resultado) {
                res.status(200).json({ msg: 'Item de carrinho atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Item de carrinho não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar item de carrinho' });
        }
    }

    async excluirItemCarrinho(req, res) {
        const id = req.params.id;
        try {
            const resultado = await ItensCarrinhoModel.excluirItemCarrinho(id);
            if (resultado) {
                res.status(200).json({ msg: 'Item de carrinho excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Item de carrinho não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir item de carrinho' });
        }
    }
}

module.exports = new ItensCarrinhoController();
