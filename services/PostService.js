const { Posts } = require('../models');

const createPost = async (body, user) => {
    const { postText, postTitle } = body;
    const { username, userId } = user;

    console.log('postText', postText, postTitle);

    const post = await Posts.create({ postTitle, postText, username, userId });
    return post;
};

const getAll = async () => {
    const allPosts = await Posts.findAll();
    return allPosts;
}

module.exports = {
    createPost,
    getAll,
}