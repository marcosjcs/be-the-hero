const jwt = require('jsonwebtoken');

const auth = require('../config/auth.json');

module.exports = (req, res, next) => {
    const id = req.headers.authorization;
    const authHeader = req.headers.token;

    if(!authHeader)
        return res.status(401).send({ error: 'No token provided' });

    const parts = authHeader.split(' ');

    if(!parts.length === 2)
        return res.status(401).send({ error: 'Token error'});

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token malformatted'});

    jwt.verify(token, auth.secret, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token invalid'});
        if(id!==decoded.id) return res.status(401).send({error: 'Token unauthorized for this ONG'});
        req.userId = decoded.id;
        return next();
    });
};
