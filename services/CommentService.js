const { Comments } = require('../models');

const createComment = async (body, user) => {
    const { commentText, postId } = body;
    const { username, userId } = user;

    const comment = await Comments.create({ commentText, postId, username, userId });
    return comment;
};

// const getAll = async () => {
//     const allComments = await Posts.findAll();
//     return allPosts;
// };

// const getSingle = async (id) => {
//     const singlePost = await Posts.findOne({where: { id }});
//     if (!singlePost) {
//         return {error: 'Post not found.'};
//     }
//     return singlePost;
// };

module.exports = {
    createComment,
    // getAll,
    // getSingle
}