const mongooes = require('mongoose');

const { Schema, model } = mongooes;

const userSchema = new Schema({
  __v: { type: Number, select: false },
  userId: { type: String, required: true },
  nickName: { type: String, required: true },
  password: { type: String, required: true, select: false },
  avatar_url: { type: String },
  userCover_url: { type: String },
  headline: { type: String }
}, { timestamps: true });

module.exports = model('User', userSchema);