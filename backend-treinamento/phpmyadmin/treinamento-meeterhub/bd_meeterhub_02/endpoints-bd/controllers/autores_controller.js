const AutoresModel = require('../models/autores_model.js');

class AutoresController {
    async criarAutores(req, res) {
        const autores = req.body;
        try {
            const idAutores = await AutoresModel.criarAutores(autores);
            res.status(201).json({ id_autores: idAutores });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar autores" });
        }
    }

    async obterTodosAutores(req, res) {
        try {
            const autores = await AutoresModel.obterTodosAutores();
            res.status(200).json(autores);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos os autores' });
        }
    }

    async obterAutoresPorId(req, res) {
        const id = req.params.id;
        try {
            const autores = await AutoresModel.obterAutoresPorId(id);
            if (autores) {
                res.status(200).json(autores);
            } else {
                res.status(404).json({ erro: 'Autores não encontrados' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar os autores' });
        }
    }

    async atualizarAutores(req, res) {
        const id = req.params.id;
        const autores = req.body;
        try {
            const resultado = await AutoresModel.atualizarAutores(id, autores);
            if (resultado) {
                res.status(200).json({ msg: 'Autores atualizados com sucesso' });
            } else {
                res.status(404).json({ erro: 'Autores não encontrados' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar autores' });
        }
    }

    async excluirAutores(req, res) {
        const id = req.params.id;
        try {
            const resultado = await AutoresModel.excluirAutores(id);
            if (resultado) {
                res.status(200).json({ msg: 'Autores excluídos com sucesso' });
            } else {
                res.status(404).json({ erro: 'Autores não encontrados' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir autores' });
        }
    }
}

module.exports = new AutoresController();
