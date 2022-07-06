const PostService = require('../services/PostService');

const createPost = async (req, res) => {
    try {
        const newPost = await PostService.createPost(req.body, req.user);
        return res.json(newPost);
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: 'AQUIIIIIIIII', e});
    }
};

module.exports = {
    createPost,
}