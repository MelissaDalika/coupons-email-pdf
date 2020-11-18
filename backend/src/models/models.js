const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  surname:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
 /*  verifiedEmail: {
    type: Boolean,
    default: true, // change when mail is confirm
    required: true,
  }, */
  company:{
      type: String,
      required: true,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  termsConditions: {
    type: Boolean,
    default: false,
  },
  privacy: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;