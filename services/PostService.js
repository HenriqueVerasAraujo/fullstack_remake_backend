const { Posts } = require('../models');

const createPost = async (body, user) => {
    const { postText, postTittle } = body;
    const { username, userId } = user;
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi')
    console.log('postText', postText, postTittle);

    const post = await Posts.create({ postTittle, postText, username, userId });
    return post;
};

module.exports = {
    createPost,
}