import mongoose from 'mongoose';
import { ReviewAuthorSchema } from './ReviewAuthor';

const ReviewSchema = new mongoose.Schema({
  slug: { type: String, index: { unique: true }, trim: true },
  author: ReviewAuthorSchema,
  title: String,
  text: String,
  date: { type: Date },
  visible: Boolean
});

const Review = mongoose.model('Review', ReviewSchema);

export default Review;
