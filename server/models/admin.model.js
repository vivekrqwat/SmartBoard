
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
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
  employee_id: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true 
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
