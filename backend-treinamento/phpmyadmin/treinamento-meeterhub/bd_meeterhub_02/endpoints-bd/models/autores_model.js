const mysql = require('mysql2/promise');

class AutoresModel {
    constructor() {
        this.pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'bd_meeterhub_2',
        });
    }

    async criarAutores(autores) {
        const connection = await this.pool.getConnection();
        try {
            const [resultado] = await connection.query(
                "INSERT INTO autores (id_livro, id_autor) VALUES (?, ?)",
                [autores.id_livro, autores.id_autor]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosAutores() {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM autores');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterAutoresPorId(id) {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM autores WHERE id_autores = ?', [id]);
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarAutores(id, autores) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query(
                'UPDATE autores SET id_livro = ?, id_autor = ? WHERE id_autores = ?',
                [autores.id_livro, autores.id_autor, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirAutores(id) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query('DELETE FROM autores WHERE id_autores = ?', [id]);
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new AutoresModel();
