const AutorModel = require('../models/autor_model.js');

class AutorController {
    async criarAutor(req, res) {
        const autor = req.body;
        try {
            const idAutor = await AutorModel.criarAutor(autor);
            res.status(201).json({ id_autor: idAutor });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um autor" });
        }
    }

    async obterTodosAutores(req, res) {
        try {
            const autores = await AutorModel.obterTodosAutores();
            res.status(200).json(autores);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos os autores' });
        }
    }

    async obterAutorPorId(req, res) {
        const id = req.params.id;
        try {
            const autor = await AutorModel.obterAutorPorId(id);
            if (autor) {
                res.status(200).json(autor);
            } else {
                res.status(404).json({ erro: 'Autor não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar o autor' });
        }
    }

    async atualizarAutor(req, res) {
        const id = req.params.id;
        const autor = req.body;
        try {
            const resultado = await AutorModel.atualizarAutor(id, autor);
            if (resultado) {
                res.status(200).json({ msg: 'Autor atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Autor não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar autor' });
        }
    }

    async excluirAutor(req, res) {
        const id = req.params.id;
        try {
            const resultado = await AutorModel.excluirAutor(id);
            if (resultado) {
                res.status(200).json({ msg: 'Autor excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Autor não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir autor' });
        }
    }
}

module.exports = new AutorController();
