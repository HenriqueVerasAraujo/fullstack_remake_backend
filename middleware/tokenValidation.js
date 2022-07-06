const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const tokenValidation = async (req, res, next) => {
    const token = req.header('token');
    const secret = process.env.JWT_SECRET;
    if (!token) {
        return res.json({error: 'Token not Found.'});
    };
    try {
        const tokenVerify = jsonwebtoken.verify(token, secret);
        if (!tokenVerify) {
            return res.json({error: 'Invalid Token'});
        };
        req.user = {
            username: tokenVerify.username,
            userId: tokenVerify.id,
        };
        next();
    } catch(e) {
        console.log(e);
        return res.json({error: e});
    }
}

module.exports = tokenValidation;