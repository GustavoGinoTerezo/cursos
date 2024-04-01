const mysql = require('mysql2/promise');

class LivroModel {
    constructor() {
        this.pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'bd_meeterhub_2',
        });
    }

    async criarLivro(livro) {
        const connection = await this.pool.getConnection();
        try {
            const [resultado] = await connection.query(
                "INSERT INTO livro (ISBN, titulo, ano, preco, id_editora) VALUES (?, ?, ?, ?, ?)",
                [livro.ISBN, livro.titulo, livro.ano, livro.preco, livro.id_editora]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosLivros() {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM livro');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterLivroPorId(id) {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM livro WHERE id_livro = ?', [id]);
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarLivro(id, livro) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query(
                'UPDATE livro SET ISBN = ?, titulo = ?, ano = ?, preco = ?, id_editora = ? WHERE id_livro = ?',
                [livro.ISBN, livro.titulo, livro.ano, livro.preco, livro.id_editora, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirLivro(id) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query('DELETE FROM livro WHERE id_livro = ?', [id]);
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new LivroModel();
