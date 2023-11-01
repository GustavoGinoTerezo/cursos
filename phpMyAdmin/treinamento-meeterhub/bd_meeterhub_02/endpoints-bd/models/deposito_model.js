const mysql = require('mysql2/promise');

class DepositoModel {
    constructor(){
        this.pool = mysql.createPool({
            host:'127.0.0.1',
            user: 'root',
            password:'',
            database:'bd_meeterhub_2',
        });
    }

    async criarDeposito(deposito) {
        const connection = await this.pool.getConnection();
        try{
            const [resultado] = await connection.query(
                'INSERT INTO deposito (endereco, telefone, id_livro, quantidade) VALUES (?, ?, ?, ?)',
                [deposito.endereco, deposito.telefone, deposito.id_livro, deposito.quantidade]
            );
            return resultado.insertId;
        } finally {
            connection.release();
        }
    }

    async obterTodosDepositos() {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM deposito'
            );
            return registros;
        } finally {
            connection.release();
        }
    }

    async obterDepositoPorId(id) {
        const connection = await this.pool.getConnection();
        try{
            const [registros] = await connection.query(
                'SELECT * FROM deposito WHERE id_deposito = ?',
                [id]
            );
            return registros[0];
        } finally {
            connection.release();
        }
    }

    async atualizarDeposito(id, deposito) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'UPDATE deposito SET endereco = ?, telefone = ?, id_livro = ?, quantidade = ? WHERE id_deposito = ?',
                [deposito.endereco, deposito.telefone, deposito.id_livro, deposito.quantidade, id]
            );
            return true;
        } finally {
            connection.release();
        }
    }

    async excluirDeposito(id) {
        const connection = await this.pool.getConnection();
        try{
            await connection.query(
                'DELETE FROM deposito WHERE id_deposito = ?',
                [id]
            );
            return true;
        } finally {
            connection.release();
        }
    }
}

module.exports = new DepositoModel();
