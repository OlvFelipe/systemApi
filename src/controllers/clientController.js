const conn = require('../database/connection');

class ClientController {

    all(req, res) {
        conn.promise().query(`select * from client`)
        .then(data => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status().send(err);
        })
    }

    clientByID(req, res) {
        conn.promise().query(`select * from client where id = ?`,
        [req.body.id])
        .then(data => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status().send({
                err,
                msg: 'Erro ao buscar cliente'
            })
        })
    }

    createClient(req, res) {
        conn.promise().query(`insert into client 
            (name, address, phone, address_number)
            values (?, ?, ?, ?)`,
            [req.body.name, req.body.address, 
            req.body.phone, req.body.address_number])
        .then(data => {
            res.status(201).send({
                data,
                msg: 'Cliente cadastrado com sucesso'
            })
        })
        .catch((err) => {
            res.send({
                err,
                msg: 'Erro ao cadastrar cliente'
            })
        })
    }

    updateClient(req, res) {
        conn.promise().query(`update client
        set name = ?,
            address = ?,
            phone = ?,
            address_number = ? 
            where id = ?`,
            [req.body.name, req.body.address, req.body.phone, 
            req.body.address_number, req.body.id])
        .then(data => {
            res.status(200).send({
                data,
                msg: 'Cliente atualizado com sucesso'
            })
        })
        .catch((err) => {
            res.send({
                err,
                msg: 'Não foi possivel atualizar cadastro'
            })
        })
    }
}

module.exports = new ClientController;