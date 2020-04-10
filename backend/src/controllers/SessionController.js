const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const auth = require('../config/auth');


function generateToken(params = {}){
    return jwt.sign(params, auth.secret, {
        expiresIn: 86400,
    });
}

module.exports = {
    async create(request, response){
        const {id} = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return response.status(400).json({ error: "No Ong found with this Id"});
        }

        return response.json({ name: ong['name'], token: generateToken({ id: id }) });
    }
}