import mongoose, { Schema } from 'mongoose';

export const schema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'user',
  },
  content: String,
  created: Date
});

// Export Mongoose model
export default mongoose.model('Comment', schema);