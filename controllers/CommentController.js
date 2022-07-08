const CommentService = require('../services/CommentService');

const createComment = async (req, res) => {
    try {
        const newComment = await CommentService.createComment(req.body, req.user);
        return res.json(newComment);
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: e});
    }
};

const getAll = async (req, res) => {
    const { id } = req.params;
    try {
        const allComments = await CommentService.getAll(id);
        return res.json(allComments);
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: e});
    }
};

const deleteComment = async (req, res) => {
    const { id } = req.params;
    try {
        await CommentService.deleteComment(id);
        return res.json({ ok: true });
    } catch(e) {
        console.log(e);
        return res.status(500).json({ error: e });
    };
}

// const getSingle = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const singlePost = await PostService.getSingle(id);
//         if(singlePost.error) {
//             return res.json({ error: singlePost.error });
//         }
//         return res.json(singlePost);
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json({error: e});
//     }
// }

module.exports = {
    createComment,
    getAll,
    deleteComment
};
