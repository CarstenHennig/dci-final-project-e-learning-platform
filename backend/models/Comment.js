import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema({
  commenter: {type: String, default: "Arrey Manyor"},
  comment: {type: String, default: "Build the pride, sell the stories, buy the lies!"},
  postId: { /* Id of the article to which the comment is attached referenced in Post Model */
    type: mongoose.Schema.Types.ObjectId,
    ref:"Post",
    required: true
  },
   createdAt: {
    type: Date,
    default: new Date().toString()
  },
});

const Comment = mongoose.model("comments", commentSchema);

export default Comment;