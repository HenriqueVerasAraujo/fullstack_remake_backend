const { Likes } = require('../models');

const addLike = async (body, user) => {
    const { postId } = body;
    const { userId } = user;

    const findLike = await Likes.findOne({ where : { postId, userId } });
    if(!findLike) {
        await Likes.create({ postId, userId });
        return { message: 'liked' };
    }
    await Likes.destroy({ where: { postId, userId } });
    return { message: 'unliked' };
};

// const getAll = async () => {
//     const allPosts = await Posts.findAll();
//     return allPosts;
// };

// const getSingle = async (id) => {
//     const singlePost = await Posts.findOne({where: { id }});
//     if (!singlePost) {
//         return {error: 'Post not found.'};
//     }
//     return singlePost;
// };

// const deletePost = async (id) => {
//     await Posts.destroy({ where: { id } });
// }
module.exports = {
    addLike,
}