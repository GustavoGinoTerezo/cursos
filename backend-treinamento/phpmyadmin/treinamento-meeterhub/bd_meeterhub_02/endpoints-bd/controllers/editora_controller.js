const EditoraModel = require('../models/editora_model.js');

class EditoraController {
    async criarEditora(req, res) {
        const editora = req.body;
        try {
            const idEditora = await EditoraModel.criarEditora(editora);
            res.status(201).json({ id_editora: idEditora });
        } catch (erro) {
            res.status(500).json({ erro: "Erro ao criar uma editora" });
        }
    }

    async obterTodasEditoras(req, res) {
        try {
            const editoras = await EditoraModel.obterTodasEditoras();
            res.status(200).json(editoras);
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar todas as editoras' });
        }
    }

    async obterEditoraPorId(req, res) {
        const id = req.params.id;
        try {
            const editora = await EditoraModel.obterEditoraPorId(id);
            if (editora) {
                res.status(200).json(editora);
            } else {
                res.status(404).json({ erro: 'Editora não encontrada' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao buscar a editora' });
        }
    }

    async atualizarEditora(req, res) {
        const id = req.params.id;
        const editora = req.body;
        try {
            const resultado = await EditoraModel.atualizarEditora(id, editora);
            if (resultado) {
                res.status(200).json({ msg: 'Editora atualizada com sucesso' });
            } else {
                res.status(404).json({ erro: 'Editora não encontrada' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao atualizar editora' });
        }
    }

    async excluirEditora(req, res) {
        const id = req.params.id;
        try {
            const resultado = await EditoraModel.excluirEditora(id);
            if (resultado) {
                res.status(200).json({ msg: 'Editora excluída com sucesso' });
            } else {
                res.status(404).json({ erro: 'Editora não encontrada' });
            }
        } catch (erro) {
            res.status(500).json({ erro: 'Erro ao excluir editora' });
        }
    }
}

module.exports = new EditoraController();