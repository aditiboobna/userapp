const mongoose = require('mongoose');


/**
 * User Schema
 */
const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
    email: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
  }}, {
  timestamps: true,
});


/**
 * Methods
 */
loginSchema.method({
  transform() {
    const transformed = {};
    const fields = ['username', 'email','password'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });
    return transformed;
  },


});


module.exports = mongoose.model('User', loginSchema);
