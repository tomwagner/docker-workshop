import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const ReviewAuthorSchema = new Schema({
  id: String,
  name: String,
  image: String
});
const ReviewAuthor = mongoose.model('ReviewAuthor', ReviewAuthorSchema);

export default ReviewAuthor;
