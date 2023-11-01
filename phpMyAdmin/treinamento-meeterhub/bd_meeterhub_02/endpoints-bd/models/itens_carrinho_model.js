const mysql = require('mysql2/promise');

class ItensCarrinhoModel {
    constructor() {
        this.pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'bd_meeterhub_2',
        });
    }

    async criarItemCarrinho(itemCarrinho) {
        const connection = await this.pool.getConnection();
        try {
            const [resultado] = await connection.query(
                "INSERT INTO itens_carrinho (id_carrinho, id_livro, quantidade) VALUES (?, ?, ?)",
                [itemCarrinho.id_carrinho, itemCarrinho.id_livro, itemCarrinho.quantidade]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosItensCarrinho() {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM itens_carrinho');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterItemCarrinhoPorId(id) {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM itens_carrinho WHERE id_item = ?', [id]);
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarItemCarrinho(id, itemCarrinho) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query(
                'UPDATE itens_carrinho SET id_carrinho = ?, id_livro = ?, quantidade = ? WHERE id_item = ?',
                [itemCarrinho.id_carrinho, itemCarrinho.id_livro, itemCarrinho.quantidade, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirItemCarrinho(id) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query('DELETE FROM itens_carrinho WHERE id_item = ?', [id]);
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ItensCarrinhoModel();
