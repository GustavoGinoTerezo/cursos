const mysql = require('mysql2/promise');

class EditoraModel {
    constructor() {
        this.pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'bd_meeterhub_2',
        });
    }

    async criarEditora(editora) {
        const connection = await this.pool.getConnection();
        try {
            const [resultado] = await connection.query(
                "INSERT INTO editora (nome, endereco, telefone, URL) VALUES (?, ?, ?, ?)",
                [editora.nome, editora.endereco, editora.telefone, editora.URL]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodasEditoras() {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM editora');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterEditoraPorId(id) {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM editora WHERE id_editora = ?', [id]);
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarEditora(id, editora) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query(
                'UPDATE editora SET nome = ?, endereco = ?, telefone = ?, URL = ? WHERE id_editora = ?',
                [editora.nome, editora.endereco, editora.telefone, editora.URL, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirEditora(id) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query('DELETE FROM editora WHERE id_editora = ?', [id]);
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new EditoraModel();