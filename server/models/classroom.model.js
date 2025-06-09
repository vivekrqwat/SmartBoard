
import mongoose from 'mongoose';

const classroomSchema = new mongoose.Schema({
  classroom_id: {
    type: String,
    required: true,
    unique: true
  },
  subject: {
    type: String,
    required: true
  },
  admin_id: {
    type: String,
    // ref: 'Admin',
    required: true
  },

  participants: [{
    type: String,
    default: [],
    ref: 'User'
  }],
  date: {
    type: String,
    required: true
  },
  day:{
    type:String,
    required:true
  }

}, {
  timestamps: true
});

const Classroom = mongoose.model('Classroom', classroomSchema);

export default Classroom;
