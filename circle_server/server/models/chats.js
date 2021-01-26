const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const chatSchema = new Schema({
  __v: { type: Number, select: false },
  relationId: { type: Schema.Types.ObjectId, required: true, ref: 'Relation', select: false },
  sender: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  receiver: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  content: { type: String, required: true }
}, { timestamps: true })

module.exports = model('Chat', chatSchema);
