const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const relationSchema = new Schema({
	__v: { type: Number, select: false },
  both: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: { timestamps: true } })

module.exports = model('Relation', relationSchema);