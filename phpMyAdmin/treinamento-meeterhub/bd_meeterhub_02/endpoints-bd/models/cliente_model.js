const mysql = require('mysql2/promise');

class ClienteModel {
    constructor() {
        this.pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'bd_meeterhub_2',
        });
    }

    async criarCliente(cliente) {
        const connection = await this.pool.getConnection();
        try {
            const [resultado] = await connection.query(
                "INSERT INTO cliente (email, nome, endereco, telefone) VALUES (?, ?, ?, ?)",
                [cliente.email, cliente.nome, cliente.endereco, cliente.telefone]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosClientes() {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM cliente');
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterClientePorId(id) {
        const connection = await this.pool.getConnection();
        try {
            const [registros] = await connection.query('SELECT * FROM cliente WHERE id_cliente = ?', [id]);
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarCliente(id, cliente) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query(
                'UPDATE cliente SET email = ?, nome = ?, endereco = ?, telefone = ? WHERE id_cliente = ?',
                [cliente.email, cliente.nome, cliente.endereco, cliente.telefone, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirCliente(id) {
        const connection = await this.pool.getConnection();
        try {
            await connection.query('DELETE FROM cliente WHERE id_cliente = ?', [id]);
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new ClienteModel();
