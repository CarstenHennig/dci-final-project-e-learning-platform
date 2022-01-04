import mongoose from "mongoose";
import { commentSchema } from './Comment.js';

export const postSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Our Husband has gone mad again"
  },
  summary: {
    type: String,
    default: "One step ahead one step behind. Just go on"
  },
  content: {
    type: String,
    default: "We were soldiers when the peace came and we became soldiers for peace. We were soldiers when the peace came and we became soldiers for peaceWe were soldiers when the peace came and we became soldiers for peace"
  },
  author: {
    type: String,
    default: "John Singleton"
  },
  category: {
    type: String,
    default: "Lifestyle"
  },
  imageURL: {
    type: String,
    default: 'http://placekitten.com/g/450/350'
  },
   authorId: { /* this is the ID of the author of the article referenced to UserProfile */
    type: mongoose.Schema.Types.ObjectId, 
    ref:"User",
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date().toString()
  },
  totalComments: { type: Number, default: 0 },
  comments: [commentSchema],
});

postSchema.methods.addComment = async function (comment) {
  if (this.comments.length === 3) {
    this.comments.pop();
  }
  this.totalComments++;
  this.comments.push(comment);
  await comment.save();
  return this.save();
};

const Post = mongoose.model("posts", postSchema);

export default Post;
