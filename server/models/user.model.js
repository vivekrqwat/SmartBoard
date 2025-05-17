
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
 
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  
  university_rollno: {
    type: String,
    required: true,
    unique: true
  },
  class_rollno: {
    type: String,
    required: true
  }
}, {
  timestamps: true 
});

const User = mongoose.model('User', userSchema);

export default User;
