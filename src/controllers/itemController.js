const conn = require('../connection/connetion');

class ItemController {

    all(req, res) {
        conn.promise().query(`select * from item`)
        .then(data => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status().send(err);
        })
    }

    createItem(req, res) {
        conn.promise().query(`insert into item 
        (quantity, price, name) values (?, ?, ?)`,
        [req.body.quantity, req.body.price, req.body.name])
        .then(data => {
            res.status(201).send({
                data,
                msg: 'Item cadastrado com sucesso'
            })
        })
        .catch((err) => {
            res.status().send({
                err,
                msg: 'Erro ao cadastrar item'
            })
        })
    }
}

module.exports = new ItemController;