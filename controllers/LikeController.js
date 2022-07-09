const LikeService = require('../services/LikeService');

const addLike = async (req, res) => {
    try {
        const newLike = await LikeService.addLike(req.body, req.user);
        return res.json(newLike.message);
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: e});
    }
};

module.exports = {
    addLike,
};
