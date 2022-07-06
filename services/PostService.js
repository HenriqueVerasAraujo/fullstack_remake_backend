const { Posts } = require('../models');

const createPost = async (req) => {
    const { username, userId } = req.user;
    const { postText, postTittle } = req.body;
    const post = await Posts.create({where: { username, userId, postText, postTittle }});
    return post;
};

module.exports = {
    createPost,
}