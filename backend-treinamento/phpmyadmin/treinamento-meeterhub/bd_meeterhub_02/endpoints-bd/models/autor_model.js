const mysql = require('mysql2/promise');

class AutorModel {
    constructor() {
        this.pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'bd_meeterhub_2',
        });
    }

    async criarAutor(autor) {
        const connection = await this.pool.getConnection();
        try {
            const [resultado] = await connection.query(
                "INSERT INTO autor (nome, endereco, URL) VALUES (?, ?, ?)",
                [autor.nome, autor.endereco, autor.URL]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosAutores() {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM autor');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterAutorPorId(id) {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM autor WHERE id_autor = ?', [id]);
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarAutor(id, autor) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query(
                'UPDATE autor SET nome = ?, endereco = ?, URL = ? WHERE id_autor = ?',
                [autor.nome, autor.endereco, autor.URL, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirAutor(id) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query('DELETE FROM autor WHERE id_autor = ?', [id]);
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new AutorModel();
