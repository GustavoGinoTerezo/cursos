const LivroModel = require('../models/livro_model.js');

class LivroController {
    async criarLivro(req, res) {
        const livro = req.body;
        try {
            const idLivro = await LivroModel.criarLivro(livro);
            res.status(201).json({ id_livro: idLivro });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar um livro" });
        }
    }

    async obterTodosLivros(req, res) {
        try {
            const livros = await LivroModel.obterTodosLivros();
            res.status(200).json(livros);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todos os livros' });
        }
    }

    async obterLivroPorId(req, res) {
        const id = req.params.id;
        try {
            const livro = await LivroModel.obterLivroPorId(id);
            if (livro) {
                res.status(200).json(livro);
            } else {
                res.status(404).json({ erro: 'Livro não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar o livro' });
        }
    }

    async atualizarLivro(req, res) {
        const id = req.params.id;
        const livro = req.body;
        try {
            const resultado = await LivroModel.atualizarLivro(id, livro);
            if (resultado) {
                res.status(200).json({ msg: 'Livro atualizado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Livro não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar livro' });
        }
    }

    async excluirLivro(req, res) {
        const id = req.params.id;
        try {
            const resultado = await LivroModel.excluirLivro(id);
            if (resultado) {
                res.status(200).json({ msg: 'Livro excluído com sucesso' });
            } else {
                res.status(404).json({ erro: 'Livro não encontrado' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir livro' });
        }
    }
}

module.exports = new LivroController();
