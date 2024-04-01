const mysql = require('mysql2/promise');

class CarrinhoComprasModel {
    constructor() {
        this.pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'bd_meeterhub_2',
        });
    }

    async criarCarrinhoCompras(carrinhoCompras) {
        const connection = await this.pool.getConnection();
        try {
            const [resultado] = await connection.query(
                "INSERT INTO carrinho_compras (id_cliente) VALUES (?)",
                [carrinhoCompras.id_cliente]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosCarrinhosCompras() {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM carrinho_compras');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterCarrinhoComprasPorId(id) {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM carrinho_compras WHERE id_carrinho = ?', [id]);
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarCarrinhoCompras(id, carrinhoCompras) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query(
                'UPDATE carrinho_compras SET id_cliente = ? WHERE id_carrinho = ?',
                [carrinhoCompras.id_cliente, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirCarrinhoCompras(id) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query('DELETE FROM carrinho_compras WHERE id_carrinho = ?', [id]);
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new CarrinhoComprasModel();
