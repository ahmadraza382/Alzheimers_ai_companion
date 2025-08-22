const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  content: String
});

module.exports = mongoose.model('Memory', MemorySchema);
