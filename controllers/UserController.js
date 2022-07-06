const UserService = require('../services/UserService');

const createUser = async(req, res) => {
    try {
        const create = await UserService.createUser(req.body);
        if (create.error) {
            return res.json({ message: create.error });
        }
        return res.json({ message: create.message });
    } catch(e) {
        console.log(e);
        return res.status(500).json({ error: e });
    }
}

const login = async(req, res) => {
    try {
        const loginUser = await UserService.login(req.body);
        if (loginUser.error) {
            return res.json({ error: loginUser.error });
        }
        return res.json(loginUser);
    } catch(e) {
        console.log(e);
        return res.status(500).json({ error: e });
    }
}

module.exports = {
    createUser,
    login,
};
