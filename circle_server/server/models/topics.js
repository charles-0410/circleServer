const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const postSchema = new Schema({
  __v: { type: Number, select: false },
	title: { type: String, required: true },
	introduction: { type: String, select: false }
}, { timestamps: true })

module.exports = model('Topic', postSchema);