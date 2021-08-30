const Comments = require('../models/commentModel');
const Posts = require('../models/postModel');

const commentCtrl = {
    createComment: async (req, res) => {
        try {
            const {postId, content, tag, reply, postUserId} = req.body;

            const post = await Posts.findById(postId);
            if (!post) return res.status(400).json({msg: 'This post does not exists.'});

            if(reply) {
                const cmt = await Comments.findById(reply);
                if(!cmt) return res.status(400).json({msg: 'This comment does not exists.'});
            }

            const newComment = new Comments({
                user: req.user._id,
                content,
                tag,
                reply,
                postUserId,
                postId
            });

            await Posts.findOneAndUpdate({_id: postId}, {
                $push: {comments: newComment._id}
            }, {new: true});

            await newComment.save();

            res.json({newComment})
        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },
    updateComment: async (req, res) => {
        try {
            const {content} = req.body;

            const cmt = await Comments.findOneAndUpdate({
                _id: req.params.id,
                user: req.user._id
            }, {content});

            if (!cmt) return res.status(400).json({msg: 'Error'});

            res.json({msg: 'Update success!'});
        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },
    likeComment: async (req, res) => {
        try {
            await Comments.findOneAndUpdate({_id: req.params.id}, {
                $push: {likes: req.user._id}
            }, {new: true});

            res.json({msg: 'Liked comment!'});
        } catch (e) {
            return res.status(500).json({msg: e.message});
        }
    },
    unLikeComment: async (req, res) => {
        try {
            await Comments.findOneAndUpdate({_id: req.params.id}, {
                $pull: {likes: req.user._id}
            }, {new: true});

            res.json({msg: 'UnLiked comment!'});
        } catch (e) {
            return res.status(500).json({msg: e.message});
        }
    },
    deleteComment: async (req, res) => {
        try {
            const comment = await Comments.findOneAndDelete({
                _id: req.params.id,
                $or: [
                    {user: req.user._id},
                    {postUserId: req.user._id},
                ]
            });

            await Posts.find({_id: comment.postId}, {
                $pull: {comments: req.params.id}
            });

            res.json({msg: 'Deleted comment!'});

        } catch (e) {
            return res.status(500).json({msg: e.message});
        }
    }
};

module.exports = commentCtrl;
