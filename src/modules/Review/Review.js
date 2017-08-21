import mongoose from 'mongoose';
import Review from './model/Review';

const ObjectId = mongoose.Types.ObjectId;

export const create = ({ body }) =>
  new Review(body).save();

export const list = () =>
  Review.find({ visible: true })
    .sort({ date: -1 })
    .limit(20)
    .exec();

export const update = ({ params: { id }, body}) =>
  Review.findOneAndUpdate(
    { '_id': new ObjectId(id) },
    {
      $set: body
    }
  );
