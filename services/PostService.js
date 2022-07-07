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
};

const getSingle = async (id) => {
    const singlePost = await Posts.findOne({where: { id }});
    if (!singlePost) {
        return {error: 'Post not found.'};
    }
    return singlePost;
};

module.exports = {
    createPost,
    getAll,
    getSingle
}