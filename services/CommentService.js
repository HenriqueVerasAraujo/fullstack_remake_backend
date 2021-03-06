const { Comments } = require('../models');

const createComment = async (body, user) => {
    const { commentText, postId } = body;
    const { username, userId } = user;

    const comment = await Comments.create({ commentText, postId, username, userId });
    return comment;
};

const getAll = async (postId) => {
    const allComments = await Comments.findAll({ where: { postId: Number(postId) }});
    return allComments;
};

const deleteComment = async (commentId) => {
    await Comments.destroy({ where: { id: Number(commentId) } });
};

module.exports = {
    createComment,
    getAll,
    deleteComment
};