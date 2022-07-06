const { Users } = require('../models');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const createUser = async(body) => {
    const { username, password } = body;
    const findUser = await Users.findOne({ where: { username } })
    if (!findUser) {
        const hashPass = await bcrypt.hash(password, 10);
        await Users.create({ username, password: hashPass });
        return { message: 'Account created!' };
    }
    return {error: 'This Username already exists!'}
};

const login = async (body) => {
    const { username, password } = body;
    const findUser = await Users.findOne({ where: { username } })
    if (!findUser) {
        return {error: 'Invalid Username.'};
    }
    const comparePass = await bcrypt.compare(password, findUser.password);
    if (!comparePass) {
        return {error: 'Invalid Password.'};
    }
    const response = {
        token: jsonwebtoken.sign({username: findUser.username, id: findUser.id}, process.env.JWT_SECRET),
        username: findUser.username,
        id: findUser.id,
    };
    return response;
};

module.exports = { 
    createUser,
    login,
}