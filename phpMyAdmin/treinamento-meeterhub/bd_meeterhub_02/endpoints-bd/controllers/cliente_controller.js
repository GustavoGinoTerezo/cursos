const ClienteModel = require('../models/cliente_model.js');

class ClienteController {
    async criarCliente(req, res) {
        const cliente = req.body;
        try {
            const idCliente = await ClienteModel.criarCliente(cliente);
            res.status(201).json({ id_cliente: idCliente });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um cliente" });
        }
    }

    async obterTodosClientes(req, res) {
        try {
            const clientes = await ClienteModel.obterTodosClientes();
            res.status(200).json(clientes);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos os clientes' });
        }
    }

    async obterClientePorId(req, res) {
        const id = req.params.id;
        try {
            const cliente = await ClienteModel.obterClientePorId(id);
            if (cliente) {
                res.status(200).json(cliente);
            } else {
                res.status(404).json({ erro: 'Cliente não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar o cliente' });
        }
    }

    async atualizarCliente(req, res) {
        const id = req.params.id;
        const cliente = req.body;
        try {
            const resultado = await ClienteModel.atualizarCliente(id, cliente);
            if (resultado) {
                res.status(200).json({ msg: 'Cliente atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Cliente não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar cliente' });
        }
    }

    async excluirCliente(req, res) {
        const id = req.params.id;
        try {
            const resultado = await ClienteModel.excluirCliente(id);
            if (resultado) {
                res.status(200).json({ msg: 'Cliente excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Cliente não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir cliente' });
        }
    }
}

module.exports = new ClienteController();
