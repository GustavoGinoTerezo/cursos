const DepositoModel = require('../models/deposito_model');

class DepositoController{

    async criarDeposito(req, res) {
        const deposito = req.body;
        try {
            const idDeposito = await DepositoModel.criarDeposito(deposito);
            res.status(201).json({ id_deposito: idDeposito });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um depósito" });
        }
    }

    async obterTodosDepositos(req, res) {
        try {
            const depositos = await DepositoModel.obterTodosDepositos();
            res.status(200).json(depositos);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos os depósitos' });
        }
    }

    async obterDepositoPorId(req, res) {
        const id = req.params.id;
        try {
            const deposito = await DepositoModel.obterDepositoPorId(id);
            if (deposito) {
                res.status(200).json(deposito);
            } else {
                res.status(404).json({ erro: 'Depósito não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar o depósito' });
        }
    }

    async atualizarDeposito(req, res) {
        const id = req.params.id;
        const deposito = req.body;
        try {
            const resultado = await DepositoModel.atualizarDeposito(id, deposito);
            if (resultado) {
                res.status(200).json({ msg: 'Depósito atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Depósito não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar depósito' });
        }
    }
    
    async excluirDeposito(req, res) {
        const id = req.params.id;
        try {
            const resultado = await DepositoModel.excluirDeposito(id);
            if (resultado) {
                res.status(200).json({ msg: 'Depósito excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Depósito não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir depósito' });
        }
    }

}

module.exports = new DepositoController();