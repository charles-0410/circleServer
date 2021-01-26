const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const postSchema = new Schema({
	__v: { type: Number, select: false },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	content: { type: String, required: true },
	images: [{ type: String }],
	topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
	like: { type: Number }
}, { timestamps: true })

module.exports = model('Post', postSchema);